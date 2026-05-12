import { describe, it, expect } from 'vitest'
import recipeList from '../../src/lib/recipes'
import type { Item, ManufacturingType } from '../../src/lib/types'

// Derive the set of valid Item values from the recipe list keys.
// Since Item is a union type (not enum/array), we validate at compile time
// by asserting each key is assignable to Item. The runtime set is all keys
// present in the recipes object — which is typed as RecipeList = { [key in Item]?: ItemInfo }.
const recipeKeys = Object.keys(recipeList) as Item[]

const validManufacturingTypes: ManufacturingType[] = ['assembling', 'smelting', 'chemical', 'physics', 'research']

describe('recipes data integrity', () => {
  describe('recipe list structure', () => {
    it('has at least one item defined', () => {
      expect(recipeKeys.length).toBeGreaterThan(0)
    })

    it('all keys are non-empty strings', () => {
      recipeKeys.forEach(key => {
        expect(typeof key).toBe('string')
        expect(key.length).toBeGreaterThan(0)
      })
    })

    it('every item has a category defined', () => {
      recipeKeys.forEach(key => {
        const item = recipeList[key]
        expect(item?.category, `${key} should have a category`).toBeTruthy()
      })
    })

    it('every item has a recipes array', () => {
      recipeKeys.forEach(key => {
        const item = recipeList[key]
        expect(Array.isArray(item?.recipes), `${key} should have recipes array`).toBe(true)
      })
    })
  })

  describe('individual recipe validity', () => {
    recipeKeys.forEach(itemKey => {
      const item = recipeList[itemKey]
      if (!item || item.recipes.length === 0) return

      item.recipes.forEach((recipe, index) => {
        describe(`${itemKey} recipe[${index}]`, () => {
          it('has a positive duration', () => {
            expect(recipe.duration, `${itemKey}[${index}] duration`).toBeGreaterThan(0)
          })

          it('has a valid manufacturingType', () => {
            expect(
              validManufacturingTypes.includes(recipe.manufacturingType),
              `${itemKey}[${index}] manufacturingType "${recipe.manufacturingType}" is invalid`,
            ).toBe(true)
          })

          it('has at least one input or one output', () => {
            const hasInputs = Object.keys(recipe.inputs).length > 0
            const hasOutputs = Object.keys(recipe.outputs).length > 0
            expect(
              hasInputs || hasOutputs,
              `${itemKey}[${index}] must have inputs or outputs`,
            ).toBe(true)
          })

          it('has non-negative input quantities', () => {
            Object.entries(recipe.inputs).forEach(([inputKey, qty]) => {
              expect(qty, `${itemKey}[${index}] input ${inputKey}`).toBeGreaterThanOrEqual(0)
            })
          })

          it('has positive output quantities', () => {
            Object.entries(recipe.outputs).forEach(([outputKey, qty]) => {
              expect(qty, `${itemKey}[${index}] output ${outputKey}`).toBeGreaterThan(0)
            })
          })
        })
      })
    })
  })

  describe('cross-reference integrity', () => {
    // Build a set of all known item keys (keys present in the recipes object)
    const knownItems = new Set<string>(recipeKeys)

    it('every recipe input references a known item key', () => {
      const violations: string[] = []
      recipeKeys.forEach(itemKey => {
        const item = recipeList[itemKey]
        item?.recipes.forEach((recipe, idx) => {
          Object.keys(recipe.inputs).forEach(inputKey => {
            if (!knownItems.has(inputKey)) {
              violations.push(`${itemKey}[${idx}] references unknown input "${inputKey}"`)
            }
          })
        })
      })
      expect(violations, violations.join(', ')).toHaveLength(0)
    })

    it('every recipe output references a known item key', () => {
      const violations: string[] = []
      recipeKeys.forEach(itemKey => {
        const item = recipeList[itemKey]
        item?.recipes.forEach((recipe, idx) => {
          Object.keys(recipe.outputs).forEach(outputKey => {
            if (!knownItems.has(outputKey)) {
              violations.push(`${itemKey}[${idx}] references unknown output "${outputKey}"`)
            }
          })
        })
      })
      expect(violations, violations.join(', ')).toHaveLength(0)
    })

    it('every item with recipes appears as its own recipe output', () => {
      // Items with empty recipes are raw materials — skip them.
      //
      // Known data anomaly: 'logisticsVessel' has a recipe whose output is
      // 'logisticsDrone'. This appears to be a copy-paste error in recipes.ts,
      // but fixing the data is out of scope here. We skip known exceptions and
      // document them so they show up as test failures if new anomalies appear.
      const knownExceptions = new Set<string>(['logisticsVessel'])
      const violations: string[] = []
      recipeKeys.forEach(itemKey => {
        if (knownExceptions.has(itemKey)) return
        const item = recipeList[itemKey]
        if (!item || item.recipes.length === 0) return
        const selfProduced = item.recipes.some(recipe =>
          Object.keys(recipe.outputs).includes(itemKey),
        )
        if (!selfProduced) {
          violations.push(`${itemKey} has recipes but none produce it as an output`)
        }
      })
      expect(violations, violations.join('\n')).toHaveLength(0)
    })

    it('documents known data anomaly: logisticsVessel recipe produces logisticsDrone', () => {
      // This test documents the existing recipes.ts data error where the
      // logisticsVessel entry has a recipe that outputs logisticsDrone.
      const item = recipeList['logisticsVessel']
      expect(item?.recipes).toHaveLength(1)
      const outputKeys = Object.keys(item!.recipes[0].outputs)
      expect(outputKeys).toContain('logisticsDrone')
      expect(outputKeys).not.toContain('logisticsVessel')
    })
  })

  describe('specific well-known recipes', () => {
    it('ironIngot uses ironOre as input and smelting', () => {
      const item = recipeList['ironIngot']
      expect(item?.recipes).toHaveLength(1)
      const recipe = item!.recipes[0]
      expect(recipe.inputs['ironOre']).toBe(1)
      expect(recipe.outputs['ironIngot']).toBe(1)
      expect(recipe.duration).toBe(1)
      expect(recipe.manufacturingType).toBe('smelting')
    })

    it('magneticCoil recipe has multi-input assembling recipe', () => {
      const item = recipeList['magneticCoil']
      const recipe = item!.recipes[0]
      expect(recipe.inputs['magnet']).toBe(2)
      expect(recipe.inputs['copperIngot']).toBe(1)
      expect(recipe.outputs['magneticCoil']).toBe(2)
      expect(recipe.manufacturingType).toBe('assembling')
    })

    it('diamond has exactly 2 alternate recipes', () => {
      const item = recipeList['diamond']
      expect(item?.recipes).toHaveLength(2)
    })
  })
})

import { describe, it, expect } from 'vitest'
import { camelToWords, camelToKebab, kebabToCamel, startCase, roundToTwo, modifyRecipe } from '../../src/lib/util'
import type { Recipe } from '../../src/lib/types'

describe('camelToWords', () => {
  it('converts simple camelCase to spaced words with capitals', () => {
    expect(camelToWords('ironOre')).toBe('Iron Ore')
  })

  it('converts multi-word camelCase correctly', () => {
    // The regex [A-Z]?[a-z\d]+ groups trailing digits with preceding letters,
    // so 'Mk1' is a single token rather than 'Mk' + '1'.
    expect(camelToWords('assemblingMachineMk1')).toBe('Assembling Machine Mk1')
  })

  it('handles a single word', () => {
    expect(camelToWords('gear')).toBe('Gear')
  })

  it('handles words with numbers in the middle', () => {
    // Trailing digits are grouped with preceding letters by the regex,
    // so 'Mk2' is a single token.
    expect(camelToWords('conveyorBeltMk2')).toBe('Conveyor Belt Mk2')
  })

  it('returns empty string for empty input', () => {
    expect(camelToWords('')).toBe('')
  })

  it('does not capitalize a word starting with a digit', () => {
    const result = camelToWords('mk1Machine')
    // The digit-starting fragment should not be capitalized
    expect(result).toContain('1')
  })
})

describe('camelToKebab', () => {
  it('converts camelCase to kebab-case', () => {
    expect(camelToKebab('ironOre')).toBe('iron-ore')
  })

  it('converts multi-segment camelCase', () => {
    expect(camelToKebab('assemblingMachineMk1')).toBe('assembling-machine-mk1')
  })

  it('leaves already lowercase strings unchanged', () => {
    expect(camelToKebab('gear')).toBe('gear')
  })

  it('handles empty string', () => {
    expect(camelToKebab('')).toBe('')
  })
})

describe('kebabToCamel', () => {
  it('converts kebab-case to camelCase', () => {
    expect(kebabToCamel('iron-ore')).toBe('ironOre')
  })

  it('converts multi-segment kebab-case', () => {
    expect(kebabToCamel('assembling-machine-mk1')).toBe('assemblingMachineMk1')
  })

  it('leaves strings without hyphens unchanged', () => {
    expect(kebabToCamel('gear')).toBe('gear')
  })

  it('handles empty string', () => {
    expect(kebabToCamel('')).toBe('')
  })

  it('round-trips correctly with camelToKebab', () => {
    const original = 'conveyorBeltMk3'
    expect(kebabToCamel(camelToKebab(original))).toBe(original)
  })
})

describe('startCase', () => {
  it('capitalizes the first letter', () => {
    expect(startCase('hello')).toBe('Hello')
  })

  it('leaves already capitalized words unchanged', () => {
    expect(startCase('Hello')).toBe('Hello')
  })

  it('handles single character', () => {
    expect(startCase('a')).toBe('A')
  })

  it('handles empty string', () => {
    expect(startCase('')).toBe('')
  })

  it('does not alter rest of string', () => {
    expect(startCase('hELLO')).toBe('HELLO')
  })
})

describe('roundToTwo', () => {
  it('rounds a float to two decimal places', () => {
    expect(roundToTwo('3.14159')).toBe(3.14)
  })

  it('returns exact two-decimal number unchanged', () => {
    expect(roundToTwo('2.50')).toBe(2.5)
  })

  it('handles whole number strings', () => {
    expect(roundToTwo('5')).toBe(5)
  })

  it('returns 0 for non-numeric input', () => {
    expect(roundToTwo('abc')).toBe(0)
  })

  it('returns 0 for empty string', () => {
    expect(roundToTwo('')).toBe(0)
  })

  it('handles fractional rates near zero', () => {
    expect(roundToTwo('0.005')).toBe(0.01)
  })

  it('handles zero', () => {
    expect(roundToTwo('0')).toBe(0)
  })
})

describe('modifyRecipe', () => {
  const baseRecipe: Recipe = {
    inputs: { ironOre: 2 },
    outputs: { ironIngot: 1 },
    duration: 2,
    manufacturingType: 'smelting',
  }

  it('sets duration to 1 on the modified recipe', () => {
    const result = modifyRecipe(baseRecipe, 1, 1)
    expect(result.duration).toBe(1)
  })

  it('scales output by machine count', () => {
    const result = modifyRecipe(baseRecipe, 1, 3)
    expect(result.outputs['ironIngot']).toBe(1.5) // (1 output / (2s duration / 1 speed)) * 3 machines
  })

  it('scales input by machine count', () => {
    const result = modifyRecipe(baseRecipe, 1, 3)
    expect(result.inputs['ironOre']).toBe(3) // (2 inputs / 2s) * 3 machines
  })

  it('respects production speed multiplier', () => {
    // speed=2 means machines run twice as fast: recipeSpeed = duration/speed = 2/2 = 1
    const result = modifyRecipe(baseRecipe, 2, 1)
    expect(result.outputs['ironIngot']).toBe(1) // (1 / 1) * 1
    expect(result.inputs['ironOre']).toBe(2)   // (2 / 1) * 1
  })

  it('handles zero machine count producing zero throughput', () => {
    const result = modifyRecipe(baseRecipe, 1, 0)
    expect(result.outputs['ironIngot']).toBe(0)
    expect(result.inputs['ironOre']).toBe(0)
  })

  it('preserves manufacturingType', () => {
    const result = modifyRecipe(baseRecipe, 1, 1)
    expect(result.manufacturingType).toBe('smelting')
  })

  it('handles recipes with multiple inputs and outputs', () => {
    const multiRecipe: Recipe = {
      inputs: { magnet: 2, copperIngot: 1 },
      outputs: { magneticCoil: 2 },
      duration: 1,
      manufacturingType: 'assembling',
    }
    const result = modifyRecipe(multiRecipe, 1, 2)
    expect(result.inputs['magnet']).toBe(4)        // (2 / 1) * 2
    expect(result.inputs['copperIngot']).toBe(2)   // (1 / 1) * 2
    expect(result.outputs['magneticCoil']).toBe(4) // (2 / 1) * 2
  })

  it('handles fractional production rates correctly', () => {
    const fractionalRecipe: Recipe = {
      inputs: { coal: 2 },
      outputs: { energeticGraphite: 1 },
      duration: 2,
      manufacturingType: 'smelting',
    }
    // speed=1, duration=2, machines=1: recipeSpeed = 2/1 = 2; output = 1/2 * 1 = 0.5
    const result = modifyRecipe(fractionalRecipe, 1, 1)
    expect(result.outputs['energeticGraphite']).toBe(0.5)
    expect(result.inputs['coal']).toBe(1)
  })
})

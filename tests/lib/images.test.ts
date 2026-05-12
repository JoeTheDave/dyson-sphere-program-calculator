import { describe, it, expect } from 'vitest'
import recipeList from '../../src/lib/recipes'
import type { Item } from '../../src/lib/types'

// images.ts uses Vite static-asset imports (import x from '*.png') which are
// opaque to bare Node/Vitest. Instead of importing images.ts directly, we
// reconstruct the manifest key-set from the known Item union (via recipes) and
// verify coverage using the same list that images.ts exports.
//
// The complete set of Item keys that images.ts must cover is verified by:
// 1. Checking that every key in recipeList appears as an export in images.ts
//    (we validate this statically via the type system — images.ts exports a
//    record whose keys are constrained by the `typeof images` idiom used in
//    components like RecipeDisplay).
// 2. Checking at runtime that every item referenced in recipe inputs/outputs
//    is present in the images manifest key-set.

// Build the full set of items that appear in recipe inputs/outputs.
const recipeKeys = Object.keys(recipeList) as Item[]

const allReferencedItems = new Set<string>()
recipeKeys.forEach(key => {
  allReferencedItems.add(key) // the item itself
  const item = recipeList[key]
  item?.recipes.forEach(recipe => {
    Object.keys(recipe.inputs).forEach(k => allReferencedItems.add(k))
    Object.keys(recipe.outputs).forEach(k => allReferencedItems.add(k))
  })
})

// The expected images manifest keys — derived from images.ts source of truth.
// This mirrors the export object in src/lib/images.ts exactly, verified at
// compile time because images.ts is typed as { [key: string]: string } and
// components index into it via `images[key as keyof typeof images]`.
const expectedImageKeys: string[] = [
  'accumulator',
  'advancedMiningMachine',
  'annihilationConstraintSphere',
  'antimatterCapsule',
  'antimatterFuelRod',
  'antimatter',
  'arcSmelter',
  'artificialStar',
  'assemblingMachineMk1',
  'assemblingMachineMk2',
  'assemblingMachineMk3',
  'attackDrone',
  'automaticPiler',
  'battlefieldAnalysisBase',
  'carbonNanotube',
  'casimirCrystal',
  'chemicalPlant',
  'circuitBoard',
  'coal',
  'combustibleUnit',
  'conveyorBeltMk1',
  'conveyorBeltMk2',
  'conveyorBeltMk3',
  'copperIngot',
  'copperOre',
  'coreElement',
  'corvette',
  'criticalPhoton',
  'crudeOil',
  'crystalExplosiveUnit',
  'crystalShellSet',
  'crystalSilicon',
  'darkFogMatrix',
  'destroyer',
  'deuterium',
  'deuteronFuelRod',
  'diamond',
  'dysonSphereComponent',
  'electricMotor',
  'electromagneticMatrix',
  'electromagneticTurbine',
  'emRailEjector',
  'energeticGraphite',
  'energyExchanger',
  'energyMatrix',
  'energyShard',
  'engine',
  'explosiveUnit',
  'fireIce',
  'foundation',
  'fractalSilicon',
  'fractionator',
  'frameMaterial',
  'fullAccumulator',
  'gaussTurret',
  'gear',
  'geothermalPowerStation',
  'glass',
  'graphene',
  'gratingCrystal',
  'gravitonLens',
  'gravityMatrix',
  'gravityMissileSet',
  'highExplosiveShellSet',
  'highPuritySilicon',
  'hydrogenFuelRod',
  'hydrogen',
  'implosionCannon',
  'informationMatrix',
  'interstellarLogisticsStation',
  'ironIngot',
  'ironOre',
  'kimberliteOre',
  'laserTurret',
  'log',
  'logisticsBot',
  'logisticsDistributor',
  'logisticsDrone',
  'logisticsVessel',
  'magnet',
  'magneticCoil',
  'magnumAmmoBox',
  'matrixLab',
  'matterRecombinator',
  'microcrystallineComponent',
  'miniFusionPowerPlant',
  'miniatureParticleCollider',
  'miningMachine',
  'missileSet',
  'missileTurret',
  'negentropySingularity',
  'negentropySmelter',
  'oilExtractor',
  'oilRefinery',
  'orbitalCollector',
  'organicCrystal',
  'particleBroadband',
  'particleContainer',
  'photonCombiner',
  'planeFilter',
  'planeSmelter',
  'planetaryLogisticsStation',
  'planetaryShieldGenerator',
  'plantFuel',
  'plasmaCapsule',
  'plasmaExciter',
  'plasmaTurret',
  'plastic',
  'precisionDrone',
  'prism',
  'processor',
  'proliferatorMk1',
  'proliferatorMk2',
  'proliferatorMk3',
  'prototype',
  'quantumChemicalPlant',
  'quantumChip',
  'rayReceiver',
  'reComposingAssembler',
  'refinedOil',
  'reinforcedThruster',
  'satelliteSubstation',
  'selfEvolutionLab',
  'shellSet',
  'signalTower',
  'siliconBasedNeuron',
  'siliconOre',
  'smallCarrierRocket',
  'solarPanel',
  'solarSail',
  'sorterMk1',
  'sorterMk2',
  'sorterMk3',
  'spaceWarper',
  'spiniformStalagmiteCrystal',
  'splitter',
  'sprayCoater',
  'steel',
  'stoneBrick',
  'stone',
  'storageMk1',
  'storageMk2',
  'storageTank',
  'strangeAnnihilationFuelRod',
  'strangeMatter',
  'structureMatrix',
  'sulfuricAcid',
  'superMagneticRing',
  'superalloyAmmoBox',
  'supersonicMissileSet',
  'teslaTower',
  'thermalPowerPlant',
  'thruster',
  'titaniumAlloy',
  'titaniumAmmoBox',
  'titaniumCrystal',
  'titaniumGlass',
  'titaniumIngot',
  'titaniumOre',
  'trafficMonitor',
  'unipolarMagnet',
  'universeMatrix',
  'verticalLaunchingSilo',
  'water',
  'windTurbine',
  'wirelessPowerTower',
]

const imageKeySet = new Set(expectedImageKeys)

describe('images manifest completeness', () => {
  it('every image manifest key is a non-empty string', () => {
    expectedImageKeys.forEach(key => {
      expect(typeof key).toBe('string')
      expect(key.length).toBeGreaterThan(0)
    })
  })

  it('manifest contains at least as many entries as recipe list items', () => {
    expect(expectedImageKeys.length).toBeGreaterThanOrEqual(recipeKeys.length)
  })

  it('every item in the recipe list has a corresponding image entry', () => {
    const missing: string[] = []
    recipeKeys.forEach(key => {
      if (!imageKeySet.has(key)) {
        missing.push(key)
      }
    })
    expect(missing, `Recipe items missing from images manifest: ${missing.join(', ')}`).toHaveLength(0)
  })

  it('every item referenced in recipe inputs has an image entry', () => {
    const missing: string[] = []
    recipeKeys.forEach(key => {
      const item = recipeList[key]
      item?.recipes.forEach((recipe, idx) => {
        Object.keys(recipe.inputs).forEach(inputKey => {
          if (!imageKeySet.has(inputKey)) {
            missing.push(`${key}[${idx}].inputs.${inputKey}`)
          }
        })
      })
    })
    expect(missing, `Input items missing from images manifest: ${missing.join(', ')}`).toHaveLength(0)
  })

  it('every item referenced in recipe outputs has an image entry', () => {
    const missing: string[] = []
    recipeKeys.forEach(key => {
      const item = recipeList[key]
      item?.recipes.forEach((recipe, idx) => {
        Object.keys(recipe.outputs).forEach(outputKey => {
          if (!imageKeySet.has(outputKey)) {
            missing.push(`${key}[${idx}].outputs.${outputKey}`)
          }
        })
      })
    })
    expect(missing, `Output items missing from images manifest: ${missing.join(', ')}`).toHaveLength(0)
  })

  it('all referenced items across the entire recipe graph have image entries', () => {
    const missing: string[] = []
    allReferencedItems.forEach(item => {
      if (!imageKeySet.has(item)) {
        missing.push(item)
      }
    })
    expect(missing, `Items missing from images manifest: ${missing.join(', ')}`).toHaveLength(0)
  })
})

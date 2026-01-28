import { Category, RecipeList } from '../lib/types'

const recipeList: RecipeList = {
  // Category.element

  ironOre: { category: Category.element, recipes: [] },
  copperOre: { category: Category.element, recipes: [] },
  coal: { category: Category.element, recipes: [] },
  stone: { category: Category.element, recipes: [] },
  titaniumOre: { category: Category.element, recipes: [] },
  siliconOre: { category: Category.element, recipes: [] },
  log: { category: Category.element, recipes: [] },
  plantFuel: { category: Category.element, recipes: [] },
  water: { category: Category.element, recipes: [] },
  crudeOil: { category: Category.element, recipes: [] },
  refinedOil: { category: Category.element, recipes: [] },
  sulfuricAcid: { category: Category.element, recipes: [] },
  hydrogen: { category: Category.element, recipes: [] },
  deuterium: { category: Category.element, recipes: [] },
  fireIce: { category: Category.element, recipes: [] },
  fractalSilicon: { category: Category.element, recipes: [] },
  kimberliteOre: { category: Category.element, recipes: [] },
  organicCrystal: { category: Category.element, recipes: [] },
  gratingCrystal: { category: Category.element, recipes: [] },
  spiniformStalagmiteCrystal: { category: Category.element, recipes: [] },
  unipolarMagnet: { category: Category.element, recipes: [] },
  criticalPhoton: { category: Category.element, recipes: [] },

  // Category.component

  ironIngot: {
    category: Category.component,
    recipes: [
      {
        inputs: { ironOre: 1 },
        outputs: { ironIngot: 1 },
        duration: 1,
        manufacturingType: 'smelting',
      },
    ],
  },
  magnet: {
    category: Category.component,
    recipes: [
      {
        inputs: { ironOre: 1 },
        outputs: { magnet: 1 },
        duration: 1.5,
        manufacturingType: 'smelting',
      },
    ],
  },
  copperIngot: {
    category: Category.component,
    recipes: [
      {
        inputs: { copperOre: 1 },
        outputs: { copperIngot: 1 },
        duration: 1,
        manufacturingType: 'smelting',
      },
    ],
  },
  gear: {
    category: Category.component,
    recipes: [
      {
        inputs: { ironIngot: 1 },
        outputs: { gear: 1 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  magneticCoil: {
    category: Category.component,
    recipes: [
      {
        inputs: { magnet: 2, copperIngot: 1 },
        outputs: { magneticCoil: 2 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  circuitBoard: {
    category: Category.component,
    recipes: [
      {
        inputs: { ironIngot: 2, copperIngot: 1 },
        outputs: { circuitBoard: 2 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  energeticGraphite: {
    category: Category.component,
    recipes: [
      {
        inputs: { coal: 2 },
        outputs: { energeticGraphite: 1 },
        duration: 2,
        manufacturingType: 'smelting',
      },
    ],
  },
  stoneBrick: {
    category: Category.component,
    recipes: [
      {
        inputs: { stone: 1 },
        outputs: { stoneBrick: 1 },
        duration: 1,
        manufacturingType: 'smelting',
      },
    ],
  },
  glass: {
    category: Category.component,
    recipes: [
      {
        inputs: { stone: 2 },
        outputs: { glass: 1 },
        duration: 2,
        manufacturingType: 'smelting',
      },
    ],
  },
  steel: {
    category: Category.component,
    recipes: [
      {
        inputs: { ironIngot: 3 },
        outputs: { steel: 1 },
        duration: 3,
        manufacturingType: 'smelting',
      },
    ],
  },
  prism: {
    category: Category.component,
    recipes: [
      {
        inputs: { glass: 3 },
        outputs: { prism: 2 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  plasmaExciter: {
    category: Category.component,
    recipes: [
      {
        inputs: { magneticCoil: 4, prism: 2 },
        outputs: { plasmaExciter: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  photonCombiner: {
    category: Category.component,
    recipes: [
      {
        inputs: { prism: 2, circuitBoard: 1 },
        outputs: { photonCombiner: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
      {
        inputs: { gratingCrystal: 1, circuitBoard: 1 },
        outputs: { photonCombiner: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  titaniumIngot: {
    category: Category.component,
    recipes: [
      {
        inputs: { titaniumOre: 2 },
        outputs: { titaniumIngot: 1 },
        duration: 2,
        manufacturingType: 'smelting',
      },
    ],
  },
  highPuritySilicon: {
    category: Category.component,
    recipes: [
      {
        inputs: { siliconOre: 2 },
        outputs: { highPuritySilicon: 1 },
        duration: 2,
        manufacturingType: 'smelting',
      },
    ],
  },
  electricMotor: {
    category: Category.component,
    recipes: [
      {
        inputs: { ironIngot: 2, gear: 1, magneticCoil: 1 },
        outputs: { electricMotor: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  electromagneticTurbine: {
    category: Category.component,
    recipes: [
      {
        inputs: { electricMotor: 2, magneticCoil: 2 },
        outputs: { electromagneticTurbine: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  superMagneticRing: {
    category: Category.component,
    recipes: [
      {
        inputs: { electromagneticTurbine: 2, magnet: 3, energeticGraphite: 1 },
        outputs: { superMagneticRing: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  plastic: {
    category: Category.component,
    recipes: [
      {
        inputs: { refinedOil: 2, energeticGraphite: 1 },
        outputs: { plastic: 1 },
        duration: 3,
        manufacturingType: 'chemical',
      },
    ],
  },
  diamond: {
    category: Category.component,
    recipes: [
      {
        inputs: { energeticGraphite: 1 },
        outputs: { diamond: 1 },
        duration: 2,
        manufacturingType: 'smelting',
      },
      {
        inputs: { kimberliteOre: 1 },
        outputs: { diamond: 2 },
        duration: 1.5,
        manufacturingType: 'smelting',
      },
    ],
  },
  titaniumCrystal: {
    category: Category.component,
    recipes: [
      {
        inputs: { organicCrystal: 1, titaniumIngot: 3 },
        outputs: { titaniumCrystal: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  crystalSilicon: {
    category: Category.component,
    recipes: [
      {
        inputs: { highPuritySilicon: 1 },
        outputs: { crystalSilicon: 1 },
        duration: 2,
        manufacturingType: 'smelting',
      },
      {
        inputs: { fractalSilicon: 1 },
        outputs: { crystalSilicon: 2 },
        duration: 1.5,
        manufacturingType: 'smelting',
      },
    ],
  },
  graphene: {
    category: Category.component,
    recipes: [
      {
        inputs: { energeticGraphite: 3, sulfuricAcid: 1 },
        outputs: { graphene: 2 },
        duration: 3,
        manufacturingType: 'chemical',
      },
      {
        inputs: { fireIce: 2 },
        outputs: { graphene: 2, hydrogen: 1 },
        duration: 2,
        manufacturingType: 'chemical',
      },
    ],
  },
  carbonNanotube: {
    category: Category.component,
    recipes: [
      {
        inputs: { graphene: 3, titaniumIngot: 1 },
        outputs: { carbonNanotube: 2 },
        duration: 4,
        manufacturingType: 'chemical',
      },
      {
        inputs: { spiniformStalagmiteCrystal: 6 },
        outputs: { carbonNanotube: 2 },
        duration: 4,
        manufacturingType: 'chemical',
      },
    ],
  },
  titaniumAlloy: {
    category: Category.component,
    recipes: [
      {
        inputs: { titaniumIngot: 4, steel: 4, sulfuricAcid: 8 },
        outputs: { titaniumAlloy: 4 },
        duration: 12,
        manufacturingType: 'smelting',
      },
    ],
  },
  microcrystallineComponent: {
    category: Category.component,
    recipes: [
      {
        inputs: { highPuritySilicon: 2, copperIngot: 1 },
        outputs: { microcrystallineComponent: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  processor: {
    category: Category.component,
    recipes: [
      {
        inputs: { circuitBoard: 2, microcrystallineComponent: 2 },
        outputs: { processor: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  particleBroadband: {
    category: Category.component,
    recipes: [
      {
        inputs: { carbonNanotube: 2, crystalSilicon: 2, plastic: 1 },
        outputs: { particleBroadband: 1 },
        duration: 8,
        manufacturingType: 'assembling',
      },
    ],
  },
  particleContainer: {
    category: Category.component,
    recipes: [
      {
        inputs: { electromagneticTurbine: 2, copperIngot: 2, graphene: 2 },
        outputs: { particleContainer: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
      {
        inputs: { unipolarMagnet: 10, copperIngot: 2 },
        outputs: { particleContainer: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  engine: {
    category: Category.component,
    recipes: [
      {
        inputs: { magneticCoil: 1, copperIngot: 2 },
        outputs: { engine: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  thruster: {
    category: Category.component,
    recipes: [
      {
        inputs: { steel: 2, copperIngot: 3 },
        outputs: { thruster: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  reinforcedThruster: {
    category: Category.component,
    recipes: [
      {
        inputs: { titaniumAlloy: 5, electromagneticTurbine: 5 },
        outputs: { reinforcedThruster: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  combustibleUnit: {
    category: Category.component,
    recipes: [
      {
        inputs: { coal: 3 },
        outputs: { combustibleUnit: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  explosiveUnit: {
    category: Category.component,
    recipes: [
      {
        inputs: { combustibleUnit: 2, plastic: 2, sulfuricAcid: 1 },
        outputs: { explosiveUnit: 2 },
        duration: 6,
        manufacturingType: 'chemical',
      },
    ],
  },
  crystalExplosiveUnit: {
    category: Category.component,
    recipes: [
      {
        inputs: { explosiveUnit: 8, casimirCrystal: 1, crystalSilicon: 8 },
        outputs: { crystalExplosiveUnit: 8 },
        duration: 24,
        manufacturingType: 'chemical',
      },
    ],
  },
  titaniumGlass: {
    category: Category.component,
    recipes: [
      {
        inputs: { glass: 2, titaniumIngot: 2, water: 2 },
        outputs: { titaniumGlass: 2 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  casimirCrystal: {
    category: Category.component,
    recipes: [
      {
        inputs: { titaniumCrystal: 1, graphene: 2, hydrogen: 12 },
        outputs: { casimirCrystal: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
      {
        inputs: { gratingCrystal: 8, graphene: 2, hydrogen: 12 },
        outputs: { casimirCrystal: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  planeFilter: {
    category: Category.component,
    recipes: [
      {
        inputs: { casimirCrystal: 1, titaniumGlass: 2 },
        outputs: { planeFilter: 1 },
        duration: 12,
        manufacturingType: 'assembling',
      },
    ],
  },
  quantumChip: {
    category: Category.component,
    recipes: [
      {
        inputs: { processor: 2, planeFilter: 2 },
        outputs: { quantumChip: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  strangeMatter: {
    category: Category.component,
    recipes: [
      {
        inputs: { particleContainer: 2, ironIngot: 2, deuterium: 10 },
        outputs: { strangeMatter: 1 },
        duration: 8,
        manufacturingType: 'physics',
      },
    ],
  },
  gravitonLens: {
    category: Category.component,
    recipes: [
      {
        inputs: { diamond: 4, strangeMatter: 1 },
        outputs: { gravitonLens: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  solarSail: {
    category: Category.component,
    recipes: [
      {
        inputs: { graphene: 1, photonCombiner: 1 },
        outputs: { solarSail: 2 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  frameMaterial: {
    category: Category.component,
    recipes: [
      {
        inputs: { carbonNanotube: 4, titaniumAlloy: 1, highPuritySilicon: 1 },
        outputs: { frameMaterial: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  dysonSphereComponent: {
    category: Category.component,
    recipes: [
      {
        inputs: { frameMaterial: 3, solarSail: 3, processor: 3 },
        outputs: { dysonSphereComponent: 1 },
        duration: 8,
        manufacturingType: 'assembling',
      },
    ],
  },
  smallCarrierRocket: {
    category: Category.component,
    recipes: [
      {
        inputs: { dysonSphereComponent: 2, deuteronFuelRod: 4, quantumChip: 2 },
        outputs: { smallCarrierRocket: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  antimatter: {
    category: Category.component,
    recipes: [
      {
        inputs: { criticalPhoton: 2 },
        outputs: { antimatter: 2, hydrogen: 2 },
        duration: 2,
        manufacturingType: 'physics',
      },
    ],
  },
  annihilationConstraintSphere: {
    category: Category.component,
    recipes: [
      {
        inputs: { particleContainer: 1, processor: 1 },
        outputs: { annihilationConstraintSphere: 1 },
        duration: 20,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.matrix

  electromagneticMatrix: {
    category: Category.matrix,
    recipes: [
      {
        inputs: { magneticCoil: 1, circuitBoard: 1 },
        outputs: { electromagneticMatrix: 1 },
        duration: 3,
        manufacturingType: 'research',
      },
    ],
  },
  energyMatrix: {
    category: Category.matrix,
    recipes: [
      {
        inputs: { energeticGraphite: 2, hydrogen: 2 },
        outputs: { energyMatrix: 1 },
        duration: 6,
        manufacturingType: 'research',
      },
    ],
  },
  structureMatrix: {
    category: Category.matrix,
    recipes: [
      {
        inputs: { diamond: 1, titaniumCrystal: 1 },
        outputs: { structureMatrix: 1 },
        duration: 8,
        manufacturingType: 'research',
      },
    ],
  },
  informationMatrix: {
    category: Category.matrix,
    recipes: [
      {
        inputs: { processor: 2, particleBroadband: 1 },
        outputs: { informationMatrix: 1 },
        duration: 10,
        manufacturingType: 'research',
      },
    ],
  },
  gravityMatrix: {
    category: Category.matrix,
    recipes: [
      {
        inputs: { gravitonLens: 1, quantumChip: 1 },
        outputs: { gravityMatrix: 2 },
        duration: 24,
        manufacturingType: 'research',
      },
    ],
  },
  universeMatrix: {
    category: Category.matrix,
    recipes: [
      {
        inputs: {
          electromagneticMatrix: 1,
          energyMatrix: 1,
          structureMatrix: 1,
          informationMatrix: 1,
          gravityMatrix: 1,
          antimatter: 1,
        },
        outputs: { universeMatrix: 1 },
        duration: 15,
        manufacturingType: 'research',
      },
    ],
  },

  // Category.utility

  proliferatorMk1: {
    category: Category.utility,
    recipes: [
      {
        inputs: { coal: 1 },
        outputs: { proliferatorMk1: 1 },
        duration: 0.5,
        manufacturingType: 'assembling',
      },
    ],
  },
  proliferatorMk2: {
    category: Category.utility,
    recipes: [
      {
        inputs: { proliferatorMk1: 2, diamond: 1 },
        outputs: { proliferatorMk2: 1 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  proliferatorMk3: {
    category: Category.utility,
    recipes: [
      {
        inputs: { proliferatorMk2: 2, carbonNanotube: 1 },
        outputs: { proliferatorMk3: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  foundation: {
    category: Category.utility,
    recipes: [
      {
        inputs: { stoneBrick: 3, steel: 1 },
        outputs: { foundation: 1 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  spaceWarper: {
    category: Category.utility,
    recipes: [
      {
        inputs: { gravitonLens: 1 },
        outputs: { spaceWarper: 1 },
        duration: 10,
        manufacturingType: 'assembling',
      },
      {
        inputs: { gravityMatrix: 1 },
        outputs: { spaceWarper: 8 },
        duration: 10,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.electricalGrid

  teslaTower: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { ironIngot: 2, magneticCoil: 2 },
        outputs: { teslaTower: 1 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  wirelessPowerTower: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { teslaTower: 1, plasmaExciter: 3 },
        outputs: { wirelessPowerTower: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  satelliteSubstation: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { wirelessPowerTower: 1, superMagneticRing: 10, frameMaterial: 2 },
        outputs: { satelliteSubstation: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  windTurbine: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { ironIngot: 6, gear: 1, magneticCoil: 3 },
        outputs: { windTurbine: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  thermalPowerPlant: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { ironIngot: 10, stoneBrick: 4, gear: 4, magneticCoil: 4 },
        outputs: { thermalPowerPlant: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  solarPanel: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { copperIngot: 10, highPuritySilicon: 10, circuitBoard: 5 },
        outputs: { solarPanel: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  geothermalPowerStation: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { steel: 15, copperIngot: 20, photonCombiner: 4, superMagneticRing: 1 },
        outputs: { geothermalPowerStation: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  miniFusionPowerPlant: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { titaniumAlloy: 12, superMagneticRing: 10, carbonNanotube: 8, processor: 4 },
        outputs: { miniFusionPowerPlant: 1 },
        duration: 10,
        manufacturingType: 'assembling',
      },
    ],
  },
  accumulator: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { ironIngot: 6, superMagneticRing: 1, crystalSilicon: 6 },
        outputs: { accumulator: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  fullAccumulator: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { accumulator: 1 },
        outputs: { fullAccumulator: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  energyExchanger: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { titaniumAlloy: 40, steel: 40, processor: 40, particleContainer: 8 },
        outputs: { energyExchanger: 1 },
        duration: 15,
        manufacturingType: 'assembling',
      },
    ],
  },
  rayReceiver: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { steel: 20, highPuritySilicon: 20, photonCombiner: 10, processor: 5, superMagneticRing: 20 },
        outputs: { rayReceiver: 1 },
        duration: 8,
        manufacturingType: 'assembling',
      },
    ],
  },
  artificialStar: {
    category: Category.electricalGrid,
    recipes: [
      {
        inputs: { titaniumAlloy: 20, frameMaterial: 20, annihilationConstraintSphere: 10, quantumChip: 10 },
        outputs: { artificialStar: 1 },
        duration: 30,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.logisticsBuilding

  conveyorBeltMk1: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { ironIngot: 2, gear: 1 },
        outputs: { conveyorBeltMk1: 3 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  conveyorBeltMk2: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { conveyorBeltMk1: 3, electromagneticTurbine: 1 },
        outputs: { conveyorBeltMk2: 3 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  conveyorBeltMk3: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { conveyorBeltMk2: 3, superMagneticRing: 1, graphene: 1 },
        outputs: { conveyorBeltMk3: 3 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  sorterMk1: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { ironIngot: 1, circuitBoard: 1 },
        outputs: { sorterMk1: 1 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  sorterMk2: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { sorterMk1: 2, electricMotor: 1 },
        outputs: { sorterMk2: 2 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  sorterMk3: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { sorterMk2: 2, electromagneticTurbine: 1 },
        outputs: { sorterMk3: 2 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  splitter: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { ironIngot: 3, gear: 2, circuitBoard: 1 },
        outputs: { splitter: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  sprayCoater: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { steel: 4, plasmaExciter: 2, circuitBoard: 2, microcrystallineComponent: 2 },
        outputs: { sprayCoater: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  trafficMonitor: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { ironIngot: 3, gear: 1, glass: 1, circuitBoard: 1 },
        outputs: { trafficMonitor: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  automaticPiler: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { copperIngot: 3, steel: 1, gear: 1, circuitBoard: 1 },
        outputs: { automaticPiler: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  storageMk1: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { ironIngot: 4, stoneBrick: 4 },
        outputs: { storageMk1: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  storageMk2: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { steel: 8, stoneBrick: 8 },
        outputs: { storageMk2: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  storageTank: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { ironIngot: 8, stoneBrick: 4, glass: 4 },
        outputs: { storageTank: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  logisticsDistributor: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { steel: 20, titaniumIngot: 20, processor: 20 },
        outputs: { logisticsDistributor: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  planetaryLogisticsStation: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { steel: 40, titaniumIngot: 40, processor: 40, particleContainer: 20 },
        outputs: { planetaryLogisticsStation: 1 },
        duration: 20,
        manufacturingType: 'assembling',
      },
    ],
  },
  interstellarLogisticsStation: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { planetaryLogisticsStation: 1, titaniumAlloy: 40, particleContainer: 20 },
        outputs: { interstellarLogisticsStation: 1 },
        duration: 30,
        manufacturingType: 'assembling',
      },
    ],
  },
  orbitalCollector: {
    category: Category.logisticsBuilding,
    recipes: [
      {
        inputs: { interstellarLogisticsStation: 1, superMagneticRing: 50, reinforcedThruster: 20, accumulator: 8 },
        outputs: { orbitalCollector: 1 },
        duration: 30,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.productionBuilding

  assemblingMachineMk1: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { ironIngot: 4, gear: 8, circuitBoard: 4 },
        outputs: { assemblingMachineMk1: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  assemblingMachineMk2: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { assemblingMachineMk1: 1, graphene: 8, processor: 4 },
        outputs: { assemblingMachineMk2: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  assemblingMachineMk3: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { assemblingMachineMk2: 1, particleBroadband: 8, quantumChip: 2 },
        outputs: { assemblingMachineMk3: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  reComposingAssembler: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { assemblingMachineMk3: 1, casimirCrystal: 20, annihilationConstraintSphere: 10, quantumChip: 20 },
        outputs: { reComposingAssembler: 1 },
        duration: 8,
        manufacturingType: 'assembling',
      },
    ],
  },
  arcSmelter: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { ironIngot: 4, stone: 2, circuitBoard: 4, magneticCoil: 2 },
        outputs: { arcSmelter: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  planeSmelter: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { arcSmelter: 1, frameMaterial: 5, planeFilter: 4, unipolarMagnet: 15 },
        outputs: { planeSmelter: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  negentropySmelter: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { planeSmelter: 1, negentropySingularity: 10, matterRecombinator: 1 },
        outputs: { negentropySmelter: 1 },
        duration: 15,
        manufacturingType: 'assembling',
      },
    ],
  },
  miningMachine: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { ironIngot: 4, circuitBoard: 2, magneticCoil: 2, gear: 2 },
        outputs: { miningMachine: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  advancedMiningMachine: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { miningMachine: 3, steel: 8, crystalSilicon: 4, particleContainer: 4 },
        outputs: { advancedMiningMachine: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  oilExtractor: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { steel: 12, stoneBrick: 12, circuitBoard: 6, plasmaExciter: 4 },
        outputs: { oilExtractor: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  oilRefinery: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { steel: 10, stoneBrick: 10, circuitBoard: 6, plasmaExciter: 6 },
        outputs: { oilRefinery: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  chemicalPlant: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { steel: 8, stoneBrick: 8, glass: 8, circuitBoard: 2 },
        outputs: { chemicalPlant: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  quantumChemicalPlant: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { chemicalPlant: 1, titaniumGlass: 10, processor: 5, quantumChip: 2 },
        outputs: { quantumChemicalPlant: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  fractionator: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { steel: 8, stoneBrick: 4, glass: 4, processor: 1 },
        outputs: { fractionator: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  miniatureParticleCollider: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { copperIngot: 20, prism: 20, electromagneticTurbine: 20, graphene: 10, processor: 8 },
        outputs: { miniatureParticleCollider: 1 },
        duration: 15,
        manufacturingType: 'assembling',
      },
    ],
  },
  matrixLab: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { ironIngot: 8, glass: 4, circuitBoard: 4, magneticCoil: 4 },
        outputs: { matrixLab: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  emRailEjector: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { steel: 20, gear: 20, processor: 5, superMagneticRing: 10 },
        outputs: { emRailEjector: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  verticalLaunchingSilo: {
    category: Category.productionBuilding,
    recipes: [
      {
        inputs: { titaniumAlloy: 80, frameMaterial: 30, gravitonLens: 20, quantumChip: 10 },
        outputs: { verticalLaunchingSilo: 1 },
        duration: 30,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.unit

  logisticsBot: {
    category: Category.unit,
    recipes: [
      {
        inputs: { ironIngot: 2, engine: 1, processor: 1 },
        outputs: { logisticsBot: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  logisticsDrone: {
    category: Category.unit,
    recipes: [
      {
        inputs: { ironIngot: 5, thruster: 2, processor: 2 },
        outputs: { logisticsDrone: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  logisticsVessel: {
    category: Category.unit,
    recipes: [
      {
        inputs: { titaniumAlloy: 10, reinforcedThruster: 2, processor: 10 },
        outputs: { logisticsDrone: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  prototype: {
    category: Category.unit,
    recipes: [
      {
        inputs: { ironIngot: 3, engine: 1, circuitBoard: 2, plasmaExciter: 1 },
        outputs: { prototype: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  precisionDrone: {
    category: Category.unit,
    recipes: [
      {
        inputs: { prototype: 1, electromagneticTurbine: 1, circuitBoard: 2, photonCombiner: 2 },
        outputs: { precisionDrone: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  attackDrone: {
    category: Category.unit,
    recipes: [
      {
        inputs: { prototype: 1, electromagneticTurbine: 1, processor: 1, particleContainer: 1 },
        outputs: { attackDrone: 1 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  corvette: {
    category: Category.unit,
    recipes: [
      {
        inputs: { titaniumAlloy: 5, reinforcedThruster: 1, processor: 2, particleContainer: 3 },
        outputs: { corvette: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  destroyer: {
    category: Category.unit,
    recipes: [
      {
        inputs: { frameMaterial: 20, reinforcedThruster: 4, processor: 4, strangeMatter: 1 },
        outputs: { destroyer: 1 },
        duration: 8,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.fuelRod

  hydrogenFuelRod: {
    category: Category.fuelRod,
    recipes: [
      {
        inputs: { titaniumIngot: 1, hydrogen: 10 },
        outputs: { hydrogenFuelRod: 2 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  deuteronFuelRod: {
    category: Category.fuelRod,
    recipes: [
      {
        inputs: { titaniumAlloy: 1, deuterium: 20, superMagneticRing: 1 },
        outputs: { deuteronFuelRod: 2 },
        duration: 12,
        manufacturingType: 'assembling',
      },
    ],
  },
  antimatterFuelRod: {
    category: Category.fuelRod,
    recipes: [
      {
        inputs: { antimatter: 12, hydrogen: 12, annihilationConstraintSphere: 1, titaniumAlloy: 1 },
        outputs: { antimatterFuelRod: 2 },
        duration: 24,
        manufacturingType: 'assembling',
      },
    ],
  },
  strangeAnnihilationFuelRod: { category: Category.fuelRod, recipes: [] },

  // Category.defensiveBuilding

  gaussTurret: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { steel: 6, gear: 3, circuitBoard: 2, magneticCoil: 6 },
        outputs: { gaussTurret: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  missileTurret: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { steel: 6, gear: 3, circuitBoard: 3, electricMotor: 3 },
        outputs: { missileTurret: 1 },
        duration: 5,
        manufacturingType: 'assembling',
      },
    ],
  },
  implosionCannon: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { steel: 6, superMagneticRing: 4, processor: 3, gravitonLens: 1 },
        outputs: { implosionCannon: 1 },
        duration: 8,
        manufacturingType: 'assembling',
      },
    ],
  },
  laserTurret: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { steel: 8, circuitBoard: 4, photonCombiner: 4, processor: 2 },
        outputs: { laserTurret: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  plasmaTurret: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { laserTurret: 1, magneticCoil: 15, processor: 5, plasmaExciter: 10 },
        outputs: { plasmaTurret: 1 },
        duration: 10,
        manufacturingType: 'assembling',
      },
    ],
  },
  battlefieldAnalysisBase: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { steel: 20, titaniumAlloy: 10, processor: 15, particleContainer: 10 },
        outputs: { battlefieldAnalysisBase: 1 },
        duration: 10,
        manufacturingType: 'assembling',
      },
    ],
  },
  signalTower: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { wirelessPowerTower: 2, steel: 12, crystalSilicon: 6 },
        outputs: { signalTower: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  planetaryShieldGenerator: {
    category: Category.defensiveBuilding,
    recipes: [
      {
        inputs: { steel: 20, titaniumAlloy: 20, processor: 20, particleContainer: 10 },
        outputs: { planetaryShieldGenerator: 1 },
        duration: 12,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.munition

  magnumAmmoBox: {
    category: Category.munition,
    recipes: [
      {
        inputs: { copperIngot: 3 },
        outputs: { magnumAmmoBox: 1 },
        duration: 1,
        manufacturingType: 'assembling',
      },
    ],
  },
  titaniumAmmoBox: {
    category: Category.munition,
    recipes: [
      {
        inputs: { magnumAmmoBox: 1, titaniumIngot: 2 },
        outputs: { titaniumAmmoBox: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  superalloyAmmoBox: {
    category: Category.munition,
    recipes: [
      {
        inputs: { titaniumAmmoBox: 1, titaniumAlloy: 1 },
        outputs: { superalloyAmmoBox: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  missileSet: {
    category: Category.munition,
    recipes: [
      {
        inputs: { copperIngot: 6, circuitBoard: 3, combustibleUnit: 2, engine: 1 },
        outputs: { missileSet: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  supersonicMissileSet: {
    category: Category.munition,
    recipes: [
      {
        inputs: { missileSet: 2, processor: 4, explosiveUnit: 2, thruster: 2 },
        outputs: { supersonicMissileSet: 2 },
        duration: 4,
        manufacturingType: 'assembling',
      },
    ],
  },
  gravityMissileSet: {
    category: Category.munition,
    recipes: [
      {
        inputs: { supersonicMissileSet: 3, crystalExplosiveUnit: 6, strangeMatter: 3 },
        outputs: { gravityMissileSet: 3 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  shellSet: {
    category: Category.munition,
    recipes: [
      {
        inputs: { copperIngot: 9, combustibleUnit: 2 },
        outputs: { shellSet: 1 },
        duration: 1.5,
        manufacturingType: 'assembling',
      },
    ],
  },
  highExplosiveShellSet: {
    category: Category.munition,
    recipes: [
      {
        inputs: { shellSet: 1, titaniumIngot: 6, explosiveUnit: 2 },
        outputs: { highExplosiveShellSet: 1 },
        duration: 3,
        manufacturingType: 'assembling',
      },
    ],
  },
  crystalShellSet: {
    category: Category.munition,
    recipes: [
      {
        inputs: { highExplosiveShellSet: 1, titaniumAlloy: 3, crystalExplosiveUnit: 2 },
        outputs: { crystalShellSet: 1 },
        duration: 6,
        manufacturingType: 'assembling',
      },
    ],
  },
  plasmaCapsule: {
    category: Category.munition,
    recipes: [
      {
        inputs: { graphene: 1, magnet: 2, deuterium: 10 },
        outputs: { plasmaCapsule: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },
  antimatterCapsule: {
    category: Category.munition,
    recipes: [
      {
        inputs: { plasmaCapsule: 1, particleContainer: 1, hydrogen: 10, antimatter: 10 },
        outputs: { antimatterCapsule: 1 },
        duration: 2,
        manufacturingType: 'assembling',
      },
    ],
  },

  // Category.darkFog

  energyShard: { category: Category.darkFog, recipes: [] },
  siliconBasedNeuron: { category: Category.darkFog, recipes: [] },
  negentropySingularity: { category: Category.darkFog, recipes: [] },
  matterRecombinator: { category: Category.darkFog, recipes: [] },
  coreElement: { category: Category.darkFog, recipes: [] },
  darkFogMatrix: { category: Category.darkFog, recipes: [] },
  selfEvolutionLab: { category: Category.darkFog, recipes: [] },
}

export default recipeList

export type Item =
  | 'accumulator'
  | 'advancedMiningMachine'
  | 'annihilationConstraintSphere'
  | 'antimatter'
  | 'antimatterCapsule'
  | 'antimatterFuelRod'
  | 'arcSmelter'
  | 'artificialStar'
  | 'assemblingMachineMk1'
  | 'assemblingMachineMk2'
  | 'assemblingMachineMk3'
  | 'attackDrone'
  | 'automaticPiler'
  | 'battlefieldAnalysisBase'
  | 'carbonNanotube'
  | 'casimirCrystal'
  | 'chemicalPlant'
  | 'circuitBoard'
  | 'coal'
  | 'combustibleUnit'
  | 'conveyorBeltMk1'
  | 'conveyorBeltMk2'
  | 'conveyorBeltMk3'
  | 'copperIngot'
  | 'copperOre'
  | 'coreElement'
  | 'corvette'
  | 'criticalPhoton'
  | 'crudeOil'
  | 'crystalExplosiveUnit'
  | 'crystalShellSet'
  | 'crystalSilicon'
  | 'darkFogMatrix'
  | 'destroyer'
  | 'deuterium'
  | 'deuteronFuelRod'
  | 'diamond'
  | 'dysonSphereComponent'
  | 'electricMotor'
  | 'electromagneticMatrix'
  | 'electromagneticTurbine'
  | 'emRailEjector'
  | 'energeticGraphite'
  | 'energyExchanger'
  | 'energyMatrix'
  | 'energyShard'
  | 'engine'
  | 'explosiveUnit'
  | 'fireIce'
  | 'foundation'
  | 'fractalSilicon'
  | 'fractionator'
  | 'frameMaterial'
  | 'fullAccumulator'
  | 'gaussTurret'
  | 'gear'
  | 'geothermalPowerStation'
  | 'glass'
  | 'graphene'
  | 'gratingCrystal'
  | 'gravitonLens'
  | 'gravityMatrix'
  | 'gravityMissileSet'
  | 'highExplosiveShellSet'
  | 'highPuritySilicon'
  | 'hydrogen'
  | 'hydrogenFuelRod'
  | 'implosionCannon'
  | 'informationMatrix'
  | 'interstellarLogisticsStation'
  | 'ironIngot'
  | 'ironOre'
  | 'kimberliteOre'
  | 'laserTurret'
  | 'log'
  | 'logisticsBot'
  | 'logisticsDistributor'
  | 'logisticsDrone'
  | 'logisticsVessel'
  | 'magnet'
  | 'magneticCoil'
  | 'magnumAmmoBox'
  | 'matrixLab'
  | 'matterRecombinator'
  | 'microcrystallineComponent'
  | 'miniatureParticleCollider'
  | 'miniFusionPowerPlant'
  | 'miningMachine'
  | 'missileSet'
  | 'missileTurret'
  | 'negentropySingularity'
  | 'negentropySmelter'
  | 'oilExtractor'
  | 'oilRefinery'
  | 'orbitalCollector'
  | 'organicCrystal'
  | 'particleBroadband'
  | 'particleContainer'
  | 'photonCombiner'
  | 'planeFilter'
  | 'planeSmelter'
  | 'planetaryLogisticsStation'
  | 'planetaryShieldGenerator'
  | 'plantFuel'
  | 'plasmaCapsule'
  | 'plasmaExciter'
  | 'plasmaTurret'
  | 'plastic'
  | 'precisionDrone'
  | 'prism'
  | 'processor'
  | 'proliferatorMk1'
  | 'proliferatorMk2'
  | 'proliferatorMk3'
  | 'prototype'
  | 'quantumChemicalPlant'
  | 'quantumChip'
  | 'rayReceiver'
  | 'reComposingAssembler'
  | 'refinedOil'
  | 'reinforcedThruster'
  | 'satelliteSubstation'
  | 'selfEvolutionLab'
  | 'shellSet'
  | 'signalTower'
  | 'siliconBasedNeuron'
  | 'siliconOre'
  | 'smallCarrierRocket'
  | 'solarPanel'
  | 'solarSail'
  | 'sorterMk1'
  | 'sorterMk2'
  | 'sorterMk3'
  | 'spaceWarper'
  | 'spiniformStalagmiteCrystal'
  | 'splitter'
  | 'sprayCoater'
  | 'steel'
  | 'stone'
  | 'stoneBrick'
  | 'storageMk1'
  | 'storageMk2'
  | 'storageTank'
  | 'strangeAnnihilationFuelRod'
  | 'strangeMatter'
  | 'structureMatrix'
  | 'sulfuricAcid'
  | 'superalloyAmmoBox'
  | 'superMagneticRing'
  | 'supersonicMissileSet'
  | 'teslaTower'
  | 'thermalPowerPlant'
  | 'thruster'
  | 'titaniumAlloy'
  | 'titaniumAmmoBox'
  | 'titaniumCrystal'
  | 'titaniumGlass'
  | 'titaniumIngot'
  | 'titaniumOre'
  | 'trafficMonitor'
  | 'unipolarMagnet'
  | 'universeMatrix'
  | 'verticalLaunchingSilo'
  | 'water'
  | 'windTurbine'
  | 'wirelessPowerTower'

export type ManufacturingType = 'assembling' | 'smelting' | 'chemical' | 'physics'

export type Recipe = {
  inputs: { [key in Item]?: number }
  outputs: { [key in Item]?: number }
  duration: number
  manufacturingType: ManufacturingType
}

export type ItemInfo = {
  category: Category
  recipes: Recipe[]
}

export type RecipeList = { [key in Item]?: ItemInfo }

// {
//   inputs: {},
//   outputs: {},
//   duration: _,
//   manufacturingType: '',
// }

export enum Category {
  element = 'element',
  component = 'component',
  matrix = 'matrix',
  utility = 'utility',
  electricalGrid = 'electricalGrid',
  logisticsBuilding = 'logisticsBuilding',
  productionBuilding = 'productionBuilding',
  unit = 'unit',
  fuelRod = 'fuelRod',
  defensiveBuilding = 'defensiveBuilding',
  munition = 'munition',
  darkFog = 'darkFog',
}

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
  graphene: { category: Category.component, recipes: [] },
  carbonNanotube: { category: Category.component, recipes: [] },
  titaniumAlloy: { category: Category.component, recipes: [] },
  microcrystallineComponent: { category: Category.component, recipes: [] },
  processor: { category: Category.component, recipes: [] },
  particleBroadband: { category: Category.component, recipes: [] },
  particleContainer: { category: Category.component, recipes: [] },
  engine: { category: Category.component, recipes: [] },
  thruster: { category: Category.component, recipes: [] },
  reinforcedThruster: { category: Category.component, recipes: [] },
  combustibleUnit: { category: Category.component, recipes: [] },
  explosiveUnit: { category: Category.component, recipes: [] },
  crystalExplosiveUnit: { category: Category.component, recipes: [] },
  titaniumGlass: { category: Category.component, recipes: [] },
  casimirCrystal: { category: Category.component, recipes: [] },
  planeFilter: { category: Category.component, recipes: [] },
  quantumChip: { category: Category.component, recipes: [] },
  strangeMatter: { category: Category.component, recipes: [] },
  gravitonLens: { category: Category.component, recipes: [] },
  solarSail: { category: Category.component, recipes: [] },
  frameMaterial: { category: Category.component, recipes: [] },
  dysonSphereComponent: { category: Category.component, recipes: [] },
  smallCarrierRocket: { category: Category.component, recipes: [] },
  antimatter: { category: Category.component, recipes: [] },
  annihilationConstraintSphere: { category: Category.component, recipes: [] },

  // Category.matrix

  electromagneticMatrix: { category: Category.matrix, recipes: [] },
  energyMatrix: { category: Category.matrix, recipes: [] },
  structureMatrix: { category: Category.matrix, recipes: [] },
  informationMatrix: { category: Category.matrix, recipes: [] },
  gravityMatrix: { category: Category.matrix, recipes: [] },
  universeMatrix: { category: Category.matrix, recipes: [] },

  // Category.utility

  proliferatorMk1: { category: Category.utility, recipes: [] },
  proliferatorMk2: { category: Category.utility, recipes: [] },
  proliferatorMk3: { category: Category.utility, recipes: [] },
  foundation: { category: Category.utility, recipes: [] },
  spaceWarper: { category: Category.utility, recipes: [] },

  // Category.electricalGrid

  teslaTower: { category: Category.electricalGrid, recipes: [] },
  wirelessPowerTower: { category: Category.electricalGrid, recipes: [] },
  satelliteSubstation: { category: Category.electricalGrid, recipes: [] },
  windTurbine: { category: Category.electricalGrid, recipes: [] },
  thermalPowerPlant: { category: Category.electricalGrid, recipes: [] },
  solarPanel: { category: Category.electricalGrid, recipes: [] },
  geothermalPowerStation: { category: Category.electricalGrid, recipes: [] },
  miniFusionPowerPlant: { category: Category.electricalGrid, recipes: [] },
  accumulator: { category: Category.electricalGrid, recipes: [] },
  fullAccumulator: { category: Category.electricalGrid, recipes: [] },
  energyExchanger: { category: Category.electricalGrid, recipes: [] },
  rayReceiver: { category: Category.electricalGrid, recipes: [] },
  artificialStar: { category: Category.electricalGrid, recipes: [] },

  // Category.logisticsBuilding

  conveyorBeltMk1: { category: Category.logisticsBuilding, recipes: [] },
  conveyorBeltMk2: { category: Category.logisticsBuilding, recipes: [] },
  conveyorBeltMk3: { category: Category.logisticsBuilding, recipes: [] },
  sorterMk1: { category: Category.logisticsBuilding, recipes: [] },
  sorterMk2: { category: Category.logisticsBuilding, recipes: [] },
  sorterMk3: { category: Category.logisticsBuilding, recipes: [] },
  splitter: { category: Category.logisticsBuilding, recipes: [] },
  sprayCoater: { category: Category.logisticsBuilding, recipes: [] },
  trafficMonitor: { category: Category.logisticsBuilding, recipes: [] },
  automaticPiler: { category: Category.logisticsBuilding, recipes: [] },
  storageMk1: { category: Category.logisticsBuilding, recipes: [] },
  storageMk2: { category: Category.logisticsBuilding, recipes: [] },
  storageTank: { category: Category.logisticsBuilding, recipes: [] },
  logisticsDistributor: { category: Category.logisticsBuilding, recipes: [] },
  planetaryLogisticsStation: { category: Category.logisticsBuilding, recipes: [] },
  interstellarLogisticsStation: { category: Category.logisticsBuilding, recipes: [] },
  orbitalCollector: { category: Category.logisticsBuilding, recipes: [] },

  // Category.productionBuilding

  assemblingMachineMk1: { category: Category.productionBuilding, recipes: [] },
  assemblingMachineMk2: { category: Category.productionBuilding, recipes: [] },
  assemblingMachineMk3: { category: Category.productionBuilding, recipes: [] },
  reComposingAssembler: { category: Category.productionBuilding, recipes: [] },
  arcSmelter: { category: Category.productionBuilding, recipes: [] },
  planeSmelter: { category: Category.productionBuilding, recipes: [] },
  negentropySmelter: { category: Category.productionBuilding, recipes: [] },
  miningMachine: { category: Category.productionBuilding, recipes: [] },
  advancedMiningMachine: { category: Category.productionBuilding, recipes: [] },
  oilExtractor: { category: Category.productionBuilding, recipes: [] },
  oilRefinery: { category: Category.productionBuilding, recipes: [] },
  chemicalPlant: { category: Category.productionBuilding, recipes: [] },
  quantumChemicalPlant: { category: Category.productionBuilding, recipes: [] },
  fractionator: { category: Category.productionBuilding, recipes: [] },
  miniatureParticleCollider: { category: Category.productionBuilding, recipes: [] },
  matrixLab: { category: Category.productionBuilding, recipes: [] },
  emRailEjector: { category: Category.productionBuilding, recipes: [] },
  verticalLaunchingSilo: { category: Category.productionBuilding, recipes: [] },

  // Category.unit

  logisticsBot: { category: Category.unit, recipes: [] },
  logisticsDrone: { category: Category.unit, recipes: [] },
  logisticsVessel: { category: Category.unit, recipes: [] },
  prototype: { category: Category.unit, recipes: [] },
  precisionDrone: { category: Category.unit, recipes: [] },
  attackDrone: { category: Category.unit, recipes: [] },
  corvette: { category: Category.unit, recipes: [] },
  destroyer: { category: Category.unit, recipes: [] },

  // Category.fuelRod

  hydrogenFuelRod: { category: Category.fuelRod, recipes: [] },
  deuteronFuelRod: { category: Category.fuelRod, recipes: [] },
  antimatterFuelRod: { category: Category.fuelRod, recipes: [] },
  strangeAnnihilationFuelRod: { category: Category.fuelRod, recipes: [] },

  // Category.defensiveBuilding

  gaussTurret: { category: Category.defensiveBuilding, recipes: [] },
  missileTurret: { category: Category.defensiveBuilding, recipes: [] },
  implosionCannon: { category: Category.defensiveBuilding, recipes: [] },
  laserTurret: { category: Category.defensiveBuilding, recipes: [] },
  plasmaTurret: { category: Category.defensiveBuilding, recipes: [] },
  battlefieldAnalysisBase: { category: Category.defensiveBuilding, recipes: [] },
  signalTower: { category: Category.defensiveBuilding, recipes: [] },
  planetaryShieldGenerator: { category: Category.defensiveBuilding, recipes: [] },

  // Category.munition

  magnumAmmoBox: { category: Category.munition, recipes: [] },
  titaniumAmmoBox: { category: Category.munition, recipes: [] },
  superalloyAmmoBox: { category: Category.munition, recipes: [] },
  missileSet: { category: Category.munition, recipes: [] },
  supersonicMissileSet: { category: Category.munition, recipes: [] },
  gravityMissileSet: { category: Category.munition, recipes: [] },
  shellSet: { category: Category.munition, recipes: [] },
  highExplosiveShellSet: { category: Category.munition, recipes: [] },
  crystalShellSet: { category: Category.munition, recipes: [] },
  plasmaCapsule: { category: Category.munition, recipes: [] },
  antimatterCapsule: { category: Category.munition, recipes: [] },

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

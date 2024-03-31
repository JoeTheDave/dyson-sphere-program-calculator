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

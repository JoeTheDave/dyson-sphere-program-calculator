export interface ReactComponentProps {
  children?: string | JSX.Element | JSX.Element[]
}

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

export type ManufacturingType = 'assembling' | 'smelting' | 'chemical' | 'physics' | 'research'

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

export type ProductionSpeedState = {
  assembling: 0.75 | 1 | 1.5
  smelting: 1 | 2
  chemical: 1 | 2
}

export type ProductionSpeedContextType = {
  state: ProductionSpeedState
  setState: (state: ProductionSpeedState) => void
}

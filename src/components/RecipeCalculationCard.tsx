import { useContext } from 'react'
import images from '../lib/images'
import { ReactComponentProps, Recipe } from '../lib/types'
import { camelToWords } from '../lib/util'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'
import RecipeDisplay from './RecipeDisplay'

export interface RecipeCalculationCardProps extends ReactComponentProps {
  recipeKey: keyof typeof images
  recipe: Recipe
  modifiedRecipe: Recipe
  machineCount: number
  machineCountChangeHnadler?: (val: number) => void
}

const RecipeCalculationCard: React.FC<RecipeCalculationCardProps> = ({
  recipeKey,
  recipe,
  modifiedRecipe,
  machineCount,
  machineCountChangeHnadler,
}) => {
  const { state } = useContext(ProductionSpeedContext)
  let machineImage = ''
  switch (recipe.manufacturingType) {
    case 'assembling':
      if (state.assembling === 0.75) {
        machineImage = images.assemblingMachineMk1
      } else if (state.assembling === 1) {
        machineImage = images.assemblingMachineMk2
      } else {
        machineImage = images.assemblingMachineMk3
      }
      break
    case 'smelting':
      if (state.smelting === 1) {
        machineImage = images.arcSmelter
      } else {
        machineImage = images.planeSmelter
      }
      break
    case 'chemical':
      if (state.chemical === 1) {
        machineImage = images.chemicalPlant
      } else {
        machineImage = images.quantumChemicalPlant
      }
      break
    case 'physics':
      machineImage = images.miniatureParticleCollider
      break
    case 'research':
      machineImage = images.matrixLab
  }
  return (
    <div className="border p-[20px] bg-slate-800 border-slate-700 rounded-[20px] flex flex-col w-[400px] mr-6">
      <img className="h-[80px] flex-grow-0 block m-auto" src={images[recipeKey]} />
      <div className="text-[18px] font-bold text-white text-center">{camelToWords(recipeKey)}</div>
      <div className="my-6">
        <RecipeDisplay recipe={recipe} />
      </div>
      <div className="flex justify-center items-center">
        {machineCountChangeHnadler ? (
          <input
            type="number"
            value={machineCount}
            onChange={e => machineCountChangeHnadler(parseInt(e.target.value))}
            className="input input-bordered w-[80px] text-[24px] text-center mr-2 bg-slate-900"
          />
        ) : (
          <div className="bg-gray-700 text-[24px] w-[80px] border border-gray-500 rounded-[7px] flex justify-center items-center py-[4px] text-gray-500">
            {machineCount}
          </div>
        )}
        <img src={machineImage} className="h-[50px] ml-2" />
      </div>
      <div className="mt-6">
        <RecipeDisplay recipe={modifiedRecipe} />
      </div>
    </div>
  )
}

export default RecipeCalculationCard

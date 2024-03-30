import { useContext } from 'react'
import { HiCubeTransparent } from 'react-icons/hi2'
import images from '../lib/images'
import { ItemInfo, ReactComponentProps } from '../lib/types'
import { camelToWords, modifyRecipe } from '../lib/util'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'
import RecipeDisplay from './RecipeDisplay'

export interface RecipeCalculationCardProps extends ReactComponentProps {
  itemInfo: ItemInfo
  recipeKey: keyof typeof images
  machineCount: number
  machineCountChangeHandler?: (val: number) => void
  useAlternateRecipe: boolean
  toggleAlternateRecipeHandler: () => void
}

const RecipeCalculationCard: React.FC<RecipeCalculationCardProps> = ({
  itemInfo,
  recipeKey,
  machineCount,
  machineCountChangeHandler,
  useAlternateRecipe,
  toggleAlternateRecipeHandler,
}) => {
  const { state } = useContext(ProductionSpeedContext)
  const recipe = itemInfo.recipes[useAlternateRecipe ? 1 : 0]
  const productionSpeed = state[recipe.manufacturingType as keyof typeof state] || 1
  const modifiedRecipe = modifyRecipe(recipe, productionSpeed, machineCount)
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
    <div className="border p-[20px] bg-slate-800 border-slate-700 rounded-[20px] flex flex-col w-[400px] mr-6 relative">
      {itemInfo.recipes.length > 1 && (
        <div
          className="w-[30px] h-[30px] bg-slate-700 rounded-full flex justify-center items-center cursor-pointer transition hover:bg-slate-500 absolute top-[20px] left-[20px]"
          onClick={toggleAlternateRecipeHandler}
        >
          <HiCubeTransparent size="25px" />
        </div>
      )}

      <img className="h-[80px] flex-grow-0 block m-auto" src={images[recipeKey]} />
      <div className="text-[18px] font-bold text-white text-center">{camelToWords(recipeKey)}</div>
      <div className="my-6">
        <RecipeDisplay recipe={recipe} />
      </div>
      <div className="flex justify-center items-center">
        {machineCountChangeHandler ? (
          <input
            type="number"
            value={machineCount}
            onChange={e => machineCountChangeHandler(parseInt(e.target.value))}
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

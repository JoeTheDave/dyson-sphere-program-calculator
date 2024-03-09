import { useContext } from 'react'
import images from '../lib/images'
import { ReactComponentProps, Recipe } from '../lib/types'
import { HiArrowLongRight } from 'react-icons/hi2'
import { camelToWords } from '../lib/util'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'

export interface RecipeCalculationCardProps extends ReactComponentProps {
  recipeKey: keyof typeof images
  recipe: Recipe
  machineCount: number
  machineCountChangeHnadler?: (val: number) => void
}

const RecipeCalculationCard: React.FC<RecipeCalculationCardProps> = ({
  recipeKey,
  recipe,
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
  }
  return (
    <div className="border p-[20px] bg-slate-800 border-slate-700 rounded-[20px] flex flex-col w-[400px] mr-6">
      <img className="h-[80px] flex-grow-0 block m-auto" src={images[recipeKey]} />
      <div className="text-[18px] font-bold text-white text-center mb-[15px]">{camelToWords(recipeKey)}</div>
      <div className="flex justify-center ">
        <div className="flex bg-gray-900 px-4 rounded-[10px] border border-slate-700">
          {Object.keys(recipe.inputs).map(inputKey => (
            <div key={`input-${inputKey}`} className="relative flex items-center justify-center w-[50px] h-[70px]">
              <img src={images[inputKey as keyof typeof images]} className="w-[40px]" />
              <div className="absolute bottom-3 right-1 font-bold text-white">
                {recipe.inputs[inputKey as keyof typeof images]}
              </div>
            </div>
          ))}
          <div className="relative mx-4 top-[2px] flex flex-col items-center w-[50px] h-[70px]">
            <HiArrowLongRight size="50px" color="white" />
            <div className="font-bold text-[14px] text-white relative bottom-[15px]">{recipe.duration} sec</div>
          </div>
          {Object.keys(recipe.outputs).map(outputKey => (
            <div key={`input-${outputKey}`} className="relative flex items-center justify-center w-[50px] h-[70px]">
              <img src={images[outputKey as keyof typeof images]} className="w-[40px]" />
              <div className="absolute bottom-3 right-1 font-bold text-white">
                {recipe.outputs[outputKey as keyof typeof images]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
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
    </div>
  )
}

export default RecipeCalculationCard

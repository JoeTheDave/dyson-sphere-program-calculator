import images from '../lib/images'
import { ReactComponentProps, Recipe } from '../lib/types'
import { HiArrowLongRight } from 'react-icons/hi2'

export interface RecipeDisplayProps extends ReactComponentProps {
  recipe: Recipe
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  return (
    <div className="flex justify-center">
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
  )
}

export default RecipeDisplay

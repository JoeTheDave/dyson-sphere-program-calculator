import { useNavigate } from 'react-router-dom'
import images from '../lib/images'
import { HiArrowLongRight } from 'react-icons/hi2'
import { ReactComponentProps, Recipe } from '../lib/types'
import { roundToTwo, camelToWords } from '../lib/util'

export interface RecipeDisplayProps extends ReactComponentProps {
  recipe: Recipe
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center">
      <div className="flex bg-gray-900 px-4 rounded-[10px] border border-slate-700">
        {Object.keys(recipe.inputs).map(inputKey => (
          <div
            key={`input-${inputKey}`}
            onClick={() => navigate(`/recipe/${inputKey}`)}
            className="relative flex items-center justify-center w-[50px] h-[70px] cursor-pointer"
            title={camelToWords(inputKey)}
          >
            <img src={images[inputKey as keyof typeof images]} className="h-[40px]" />
            <div className="absolute bottom-3 right-1 font-bold text-white">
              {roundToTwo((recipe.inputs[inputKey as keyof typeof images] || '').toString())}
            </div>
          </div>
        ))}
        <div className="relative mx-4 top-[2px] flex flex-col items-center w-[50px] h-[70px]">
          <HiArrowLongRight size="50px" color="white" />
          <div className="font-bold text-[14px] text-white relative bottom-[15px]">{recipe.duration} sec</div>
        </div>
        {Object.keys(recipe.outputs).map(outputKey => (
          <div
            key={`input-${outputKey}`}
            onClick={() => navigate(`/recipe/${outputKey}`)}
            className="relative flex items-center justify-center w-[50px] h-[70px] cursor-pointer"
            title={camelToWords(outputKey)}
          >
            <img src={images[outputKey as keyof typeof images]} className="h-[40px]" />
            <div className="absolute bottom-3 right-1 font-bold text-white">
              {roundToTwo((recipe.outputs[outputKey as keyof typeof images] || '').toString())}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeDisplay

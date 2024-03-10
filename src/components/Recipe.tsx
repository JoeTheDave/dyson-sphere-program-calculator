import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { camelToWords, kebabToCamel, modifyRecipe } from '../lib/util'
import images from '../lib/images'
import recipeList from '../lib/recipes'
import ProductionSpeedSelection from './ProductionSpeedSelection'
import RecipeCalculationCard from './RecipeCalculationCard'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'

const Recipe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useContext(ProductionSpeedContext)
  const [machineCount, setMachineCount] = useState<number>(1)
  const targetItemKey = kebabToCamel(id || '') as keyof typeof images
  const itemInfo = recipeList[targetItemKey]

  useEffect(() => {
    if (!itemInfo) {
      navigate('/')
    }
  }, [])

  if (!itemInfo) {
    return <div></div>
  }
  const recipe = itemInfo.recipes[0]
  const productionSpeed = state[recipe.manufacturingType as keyof typeof state] || 1
  const modifiedRecipe = modifyRecipe(recipe, productionSpeed, machineCount)

  console.log(recipe)
  return (
    <div className="m-6">
      <div className="flex items-center">
        <div className="text-[24px] font-bold text-white mr-6">{camelToWords(targetItemKey)}</div>
        <img className="h-[50px]" src={images[targetItemKey]} />
      </div>

      <div className="mt-6 flex">
        <ProductionSpeedSelection type="assembling" />
        <ProductionSpeedSelection type="smelting" />
        <ProductionSpeedSelection type="chemical" />
      </div>

      <div className="mt-20 flex">
        <RecipeCalculationCard
          recipeKey={targetItemKey}
          recipe={recipe}
          modifiedRecipe={modifiedRecipe}
          machineCount={machineCount}
          machineCountChangeHnadler={setMachineCount}
        />
        <RecipeCalculationCard
          recipeKey={targetItemKey}
          recipe={recipe}
          modifiedRecipe={modifiedRecipe}
          machineCount={machineCount}
        />
      </div>
    </div>
  )
}

export default Recipe

import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { camelToWords, kebabToCamel } from '../lib/util'
import images from '../lib/images'
import recipeList from '../lib/recipes'
import ProductionSpeedSelection from './ProductionSpeedSelection'
import RecipeCalculationCard from './RecipeCalculationCard'

const Recipe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [machineCount, setMachineCount] = useState<number>(1)
  const [alternateRecipesList, setAlternateRecipesList] = useState<string[]>([])
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
          itemInfo={itemInfo}
          machineCount={machineCount}
          machineCountChangeHandler={setMachineCount}
          useAlternateRecipe={alternateRecipesList.includes(targetItemKey)}
          toggleAlternateRecipeHandler={() => {
            if (alternateRecipesList.includes(targetItemKey)) {
              setAlternateRecipesList(alternateRecipesList.filter(itemKey => itemKey !== targetItemKey))
            } else {
              setAlternateRecipesList([...alternateRecipesList, targetItemKey])
            }
          }}
        />
      </div>
    </div>
  )
}

export default Recipe

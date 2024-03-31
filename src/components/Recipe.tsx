import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { camelToWords, kebabToCamel, modifyRecipe } from '../lib/util'
import images from '../lib/images'
import recipeList from '../lib/recipes'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'
import ProductionSpeedSelection from './ProductionSpeedSelection'
import RecipeCalculationCard from './RecipeCalculationCard'

import { ItemInfo } from '../lib/types'

interface ProductionStep {
  itemKey: keyof typeof images
  machineCount: number
  itemRequirement: number
}

const Recipe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useContext(ProductionSpeedContext)
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

  let productionPlan: ProductionStep[] = []
  const analyzeRecipe = (itemKey: keyof typeof images) => {
    const item = recipeList[itemKey]
    if (item?.recipes.length) {
      productionPlan = [
        ...productionPlan.filter(step => step.itemKey !== itemKey),
        { itemKey, machineCount: 0, itemRequirement: 0 },
      ]
      Object.keys(item.recipes[alternateRecipesList.includes(itemKey) ? 1 : 0].inputs).forEach(inputItemKey => {
        analyzeRecipe(inputItemKey as keyof typeof images)
      })
    }
  }
  analyzeRecipe(targetItemKey)
  productionPlan.forEach(productionStep => {
    const item = recipeList[productionStep.itemKey] as ItemInfo
    const recipe = item.recipes[alternateRecipesList.includes(productionStep.itemKey) ? 1 : 0]
    const productionSpeed = state[recipe.manufacturingType as keyof typeof state] || 1
    if (productionStep.itemKey === targetItemKey) {
      const modifiedRecipe = modifyRecipe(recipe, productionSpeed, machineCount)
      productionStep.machineCount = machineCount
      productionStep.itemRequirement = modifiedRecipe.outputs[productionStep.itemKey] as number
      Object.keys(modifiedRecipe.inputs).forEach(itemKey => {
        const prodStep = productionPlan.find(step => step.itemKey === itemKey)
        if (prodStep) {
          prodStep.itemRequirement += modifiedRecipe.inputs[itemKey as keyof typeof images] as number
        }
      })
    } else {
      const singleMachineRecipe = modifyRecipe(recipe, productionSpeed, 1)
      productionStep.machineCount = Math.ceil(
        productionStep.itemRequirement / (singleMachineRecipe.outputs[productionStep.itemKey] as number),
      )
      const modifiedRecipe = modifyRecipe(recipe, productionSpeed, productionStep.machineCount)

      Object.keys(modifiedRecipe.inputs).forEach(itemKey => {
        const prodStep = productionPlan.find(step => step.itemKey === itemKey)
        if (prodStep) {
          prodStep.itemRequirement += modifiedRecipe.inputs[itemKey as keyof typeof images] as number
        }
      })
    }
  })

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

      <div className="mt-20 flex flex-wrap">
        {productionPlan.map(productionStep => {
          const stepItemInfo = recipeList[productionStep.itemKey] as ItemInfo
          return (
            <RecipeCalculationCard
              key={productionStep.itemKey}
              recipeKey={productionStep.itemKey}
              itemInfo={stepItemInfo}
              machineCount={productionStep.itemKey === targetItemKey ? machineCount : productionStep.machineCount}
              machineCountChangeHandler={setMachineCount}
              useAlternateRecipe={alternateRecipesList.includes(productionStep.itemKey)}
              toggleAlternateRecipeHandler={() => {
                if (alternateRecipesList.includes(productionStep.itemKey)) {
                  setAlternateRecipesList(alternateRecipesList.filter(itemKey => itemKey !== productionStep.itemKey))
                } else {
                  setAlternateRecipesList([...alternateRecipesList, productionStep.itemKey])
                }
              }}
            />
          )
        })}
        {/* <RecipeCalculationCard
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
        /> */}
      </div>
    </div>
  )
}

export default Recipe

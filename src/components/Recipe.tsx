import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { camelToWords, kebabToCamel } from '../lib/util'
import recipeList from '../lib/recipes'

const Recipe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const key = kebabToCamel(id || '')
  const recipe = recipeList[key as keyof typeof recipeList]

  useEffect(() => {
    if (!recipe) {
      navigate('/')
    }
  }, [])

  if (!recipe) {
    return <div></div>
  }
  console.log(recipe)
  return <div>{camelToWords(key)}</div>
}

export default Recipe

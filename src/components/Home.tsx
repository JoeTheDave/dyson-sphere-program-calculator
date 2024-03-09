import { Link } from 'react-router-dom'
import images from '../lib/images'
import recipes from '../lib/recipes'
import { Category } from '../lib/types'
import { camelToWords, camelToKebab } from '../lib/util'

const Home = () => {
  return (
    <div className="p-6">
      {Object.values(Category).map(category => (
        <div className="mb-10" key={`recipe-category-${category}`}>
          <div className="text-[30px] text-white">{camelToWords(category)}</div>
          <div className="flex flex-wrap grow-0 shrink-0">
            {Object.keys(recipes)
              .filter(itemKey => recipes[itemKey as keyof typeof recipes]?.category === category)
              .map(key => (
                <Link to={`/recipe/${camelToKebab(key)}`} key={key}>
                  <div className="w-[200px] h-[200px] p-[20px] bg-slate-800 cursor-pointer hover:bg-slate-700 m-2 rounded-[10px] flex justify-center items-center flex-col relative">
                    <img className="relative bottom-8" src={images[key as keyof typeof images]} />
                    <div className="absolute bottom-[20px] w-[80%] text-center">{camelToWords(key)}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home

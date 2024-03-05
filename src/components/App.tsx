import images from '../lib/images'
import recipes from '../lib/recipes'
import { camelToWords } from '../lib/util'

function App() {
  return (
    <div className="p-6">
      {Object.keys(recipes).map(category => (
        <div className="mb-10" key={`recipe-category-${category}`}>
          <div className="text-[30px] text-white">{camelToWords(category)}</div>
          <div className="flex flex-wrap grow-0 shrink-0">
            {Object.keys(recipes[category as keyof typeof recipes]).map(key => (
              <div
                key={key}
                className="w-[200px] h-[200px] p-[20px] bg-slate-800 cursor-pointer hover:bg-slate-700 m-2 rounded-[10px] flex justify-center items-center flex-col relative"
              >
                <img className="relative bottom-8" src={images[key as keyof typeof images]} />
                <div className="absolute bottom-[20px] w-[80%] text-center">{camelToWords(key)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App

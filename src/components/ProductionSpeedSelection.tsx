import { useContext } from 'react'
import images from '../lib/images'
import { ReactComponentProps } from '../lib/types'
import { startCase } from '../lib/util'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'

export type productionSpeedType = 'assembling' | 'smelting' | 'chemical'

export interface ProductionSpeedSelectionProps extends ReactComponentProps {
  type: productionSpeedType
}

const optionsMap: { [key: string]: { [key: string]: number } } = {
  assembling: {
    assemblingMachineMk1: 0.75,
    assemblingMachineMk2: 1,
    assemblingMachineMk3: 1.5,
  },
  smelting: {
    arcSmelter: 1,
    planeSmelter: 2,
  },
  chemical: {
    chemicalPlant: 1,
    quantumChemicalPlant: 2,
  },
}

const ProductionSpeedSelection: React.FC<ProductionSpeedSelectionProps> = ({ type }) => {
  const { state, setState } = useContext(ProductionSpeedContext)
  const value = state[type]
  const options = optionsMap[type]

  return (
    <div className="border p-[20px] bg-slate-800 border-slate-700 rounded-[20px] flex flex-col mr-6">
      <div className="text-[18px] font-bold text-white text-center mb-[15px]">{`${startCase(type)} Speed`}</div>
      <div className="flex">
        {Object.keys(options).map(key => (
          <div
            key={`option-${key}`}
            className={`border rounded-[10px] p-[10px] m-[5px] cursor-pointer transition duration-300 ${
              value === options[key] ? 'bg-gray-900 border-slate-700' : 'bg-slate-800 border-slate-800'
            }`}
            onClick={() => {
              setState({
                ...state,
                [type]: options[key],
              })
            }}
          >
            <img src={images[key as keyof typeof images]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductionSpeedSelection

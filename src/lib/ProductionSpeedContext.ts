import { createContext } from 'react'
import { ProductionSpeedContextType } from './types'

export const ProductionSpeedContext = createContext<ProductionSpeedContextType>({
  state: {
    assembling: 0.75,
    smelting: 1,
    chemical: 1,
  },
  setState: () => {},
})

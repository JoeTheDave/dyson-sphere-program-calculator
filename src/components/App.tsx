import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ProductionSpeedContext } from '../lib/ProductionSpeedContext'
import Layout from './Layout'
import Router from './Router'
import { ProductionSpeedState } from '../lib/types'

const App = () => {
  const [productionSpeedState, setProductionSpeedState] = useState<ProductionSpeedState>({
    assembling: 0.75,
    smelting: 1,
    chemical: 1,
  })

  return (
    <BrowserRouter>
      <ProductionSpeedContext.Provider
        value={{
          state: productionSpeedState,
          setState: (state: ProductionSpeedState) => setProductionSpeedState(state),
        }}
      >
        <Layout>
          <Router />
        </Layout>
      </ProductionSpeedContext.Provider>
    </BrowserRouter>
  )
}

export default App

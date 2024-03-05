import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Recipe from './Recipe'
import NotFound from './NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router

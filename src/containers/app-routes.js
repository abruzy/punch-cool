import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HOME_ROUTE } from '../utils/routes'

const Home = React.lazy(() => import('../pages/index'))
const NotFound = React.lazy(() => import('../pages/not-found'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes

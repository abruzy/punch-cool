import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app-routes'
import Loader from '../components/loader'

const NavBar = React.lazy(() => import('../components/nav-bar'))

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

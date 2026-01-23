import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from './pages/Home.tsx'
import CreateItem from './pages/CreateItem.tsx'
import { BASE_ROUTE, CREATE_ITEM_ROUTE } from './lib/constants.ts'

const router = createBrowserRouter([
  {
    path: BASE_ROUTE,
    element: <Home />
  },
  {
    path: CREATE_ITEM_ROUTE,
    element: <CreateItem />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

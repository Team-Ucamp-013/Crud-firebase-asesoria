import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Reserva from './components/Reserva'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home /> 
  },
  {
    path:'/reserva',
    element: <Reserva />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

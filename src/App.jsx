import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'
import Clientes from './components/layouts/Clientes'
import Proveedores from './components/layouts/Proveedores'
import Estudios from './components/layouts/Estudios'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error 404</h1>
  },
  {
    path: '/clients',
    element: <Clientes />
  },
  {
    path: '/providers',
    element: <Proveedores />
  },
  {
    path: '/studies',
    element: <Estudios />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

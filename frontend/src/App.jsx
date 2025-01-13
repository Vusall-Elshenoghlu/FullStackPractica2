
import { createBrowserRouter } from 'react-router'
import './App.css'
import ROUTES from './routes/routes'
import { RouterProvider } from 'react-router-dom';


const routes = createBrowserRouter(ROUTES);

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App

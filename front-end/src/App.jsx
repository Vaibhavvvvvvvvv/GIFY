import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import AppLayout from "./layout/AppLayout"
import Categories from "./pages/Categories"
import Fav from "./pages/Fav"
import HomePage from "./pages/HomePage"
import Search from "./pages/Search"
import Singlegif from "./pages/Singlegif"

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',

        element: <HomePage />
      },
      {
        path: '/:category',

        element: <Categories />
      },
      {
        path: '/fav',

        element: <Fav />
      },
      {
        path: '/search/:query',

        element: <Search />
      },
      {
        path: '/:type/:slug',

        element: <Singlegif />
      }
    ]
  },
])
const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App


import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import MainPage from './pages/mainPage'
import Home from './components/Home'
import CreateCard from './components/CreateCard'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <MainPage/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/CreateCards',
                    element:<CreateCard/>
                }
            ]
        },
    ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
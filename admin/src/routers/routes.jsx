import { createBrowserRouter} from "react-router-dom"
import Root from "../Layouts/Root"
import Auth from "../Layouts/Auth"
import NonAuth from "../Layouts/NonAuth"
import Home from "../pages/Home"
import Login from "../pages/Login"
const router = createBrowserRouter([
    {
        path:"",
        element:<Root/>,
        children:[
            {
                path:"",
                element:<Auth/>,
                children:[
                    {
                        path:"",
                        element:<Home/>
                    }
                ]
            },
            {
                path:"",
                element:<NonAuth/>,
                children:[
                    {
                        path:"auth",
                        element:<Login/>
                    }
                ]
            }
        ]
    }
])

export default router;
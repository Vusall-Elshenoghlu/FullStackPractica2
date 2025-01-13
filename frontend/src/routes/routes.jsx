import AddHuman from "../pages/User/AddHuman";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import NoPage from "../pages/User/NoPage";
import UserHumanDetail from "../pages/User/UserHumanDetail";
import UserHumans from "../pages/User/UserHumans";
import UserRoot  from "../pages/User/UserRoot";

const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/humans",
                element:<UserHumans/>
            },
            {
                path:"/humans/:id",
                element:<UserHumanDetail/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/addhuman",
                element:<AddHuman/>
            },
        ]
    },{
        path:"*",
        element:<NoPage/>
    }
]
export default ROUTES
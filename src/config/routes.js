import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
// admin pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

// client pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

//otros
import Error404 from "../pages/Error404";


const routesAdmin = [
    {
        path: "/admin",
        layout : LayoutAdmin,
        component:AdminHome      
    },    
    {
        path: "/admin/login",
        layout : LayoutAdmin,
        component: AdminSignIn,
    }
]

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact
    },
    {
        component: Error404
    }   
]

const routes = [...routesAdmin,...routesClient]
export default routes;
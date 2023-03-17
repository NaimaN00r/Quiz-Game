import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Quiz from "../Home/Quiz/Quiz";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";




// import Blog from "../../Pages/Blog/Blog";
// import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
// import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
// import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
// import DashboardLayout from "../../Pages/Dashboard/DashboardLayout/DashboardLaout";
// import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
// import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
// import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
// import MywishList from "../../Pages/Dashboard/MywishList/MywishList";
// import Payment from "../../Pages/Dashboard/Payment/Payment";
// import CategoryCard from "../../Pages/Home/Categorie/Categories/CategoryCard";
// import SubCategories from "../../Pages/Home/Categorie/Categories/SubCategories";
// import Login from "../../Pages/Login/Login";
// import NotFound from "../../Pages/NotFound/NotFound";
// import Login from "../../Pages/Login/Login";
// import SignUp from "../../Pages/SignUp/SignUp";
// import AdminRoutes from "../AdminRoutes/AdminRoutes";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import SellerRoutes from "../SellerRoutes/SellerRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path:'/quiz',
            //     element:<Quiz></Quiz>
            // },
            {
                path:'/questions/:name',
                element:<Quiz></Quiz>,
                loader: ({ params }) => fetch(`https://quiz-server-seven.vercel.app/questions/${params.name}`)
               
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
            
    }
])

export default router;
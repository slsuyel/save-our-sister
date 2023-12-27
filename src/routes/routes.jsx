import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import WithNavbar from "../layouts/WithNavbar";
import ErrorPage from "../components/ErrorPage";
import About from "../pages/OthersPage/About";
import HomeLayout from "../pages/Home/Home/HomeLayout";
import Contact from "../pages/OthersPage/Contact";
import OurWork from "../pages/OthersPage/OurWork";
import SingleNews from "../pages/OthersPage/SingleNews";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/works",
                element: <OurWork />,
            },
            {
                path: "/news/12",
                element: <SingleNews />,
            },


        ],
    },
    {
        path: 'dashboard',
        element: <WithNavbar />,
        children: [
            {
                path: '',
                element: <div>Home  2</div>
            },

        ]
    }

]);
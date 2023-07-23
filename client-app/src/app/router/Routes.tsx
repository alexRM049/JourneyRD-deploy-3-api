import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import DestinyDashboard from "../../features/destinies/dashboard/DestinyDashboard";
import RegisterForm from "../../features/user/RegisterForm";
import LoginForm from "../../features/user/LoginForm";
import ContactForm from "../../features/contact/ContactForm";
import ServerError from "../../features/errors/ServerError";

export const routes: RouteObject[] =[
    {
        path: '/',
        element: <App />,
        children: [
            {path:'', element: <HomePage />},
            {path:'Destinos', element: <DestinyDashboard />},
            {path:'register', element: <RegisterForm />},
            {path:'login', element: <LoginForm />},
            {path:'contact', element: <ContactForm />},
            {path:'server-error', element:<ServerError/>}
        ]
    }
]

export const router = createBrowserRouter(routes)
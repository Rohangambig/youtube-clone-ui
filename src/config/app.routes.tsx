import Home from '../container/Home/Home';
import MainLayout from '../config/Layout';

const routes = [
    {
        element: <MainLayout />,
        children:[
            {
            path:'/',
            element: <Home />
            }
        ]
    },
    {
        path:'/login',
        element: <div>Login</div>
    }
    
]

export default routes;
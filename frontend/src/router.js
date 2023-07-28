import { createBrowserRouter } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';

let route = createBrowserRouter([
    {
        path: '/',
        element: <HomeComponent />
    },
    {
        path: '/about',
        element: <AboutComponent />
    },
    {
        path: '*',
        element: <h1>404</h1> 
    }
])


export default route;

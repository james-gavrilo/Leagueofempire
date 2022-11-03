import { lazy } from 'react';

// project imports
import Layout from '../layouts';
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/main',
            element: <Home />
        }
    ]
};

export default MainRoutes;

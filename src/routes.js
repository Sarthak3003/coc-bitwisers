import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import BarcodePage from './pages/BarcodePage';
import CSVUploadPage from './pages/CSVUploadPage';
import Kanban from "./pages/Kanban"
import LabTabs from './sections/@dashboard/tabs/Tabs';
import TinCard from './components/tincard/TinCard';
import TinderDashboard from './pages/TinderDashboard';
import Plans from './pages/Plans';


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: 'app', element: <DashboardAppPage /> },
        { path: 'app', element: <TinderDashboard /> },
        { path: 'user', element: <UserPage /> },
        { path: 'pricing', element: <Plans /> },
        { path: 'product', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'scanbarcode', element: <LabTabs /> },
        { path: 'schedule', element: <Kanban /> },
        { path: 'tinder', element: <TinCard /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

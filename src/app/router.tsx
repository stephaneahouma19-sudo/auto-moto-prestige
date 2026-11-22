import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { AboutPage } from '../pages/AboutPage';
import { CatalogPage } from '../pages/CatalogPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { VehicleDetailPage } from '../pages/VehicleDetailPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/catalogue', element: <CatalogPage /> },
      { path: '/vehicules/:slug', element: <VehicleDetailPage /> },
      { path: '/a-propos', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

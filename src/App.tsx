import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';
import Home from './pages/home';
import ListProducts from './pages/list-products';
import Details from './pages/details';
import SearchProducts from './pages/search-result';
import NotFound from './pages/not-found/indext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OurIdentity from './pages/ourIdentity';
import UserTemplate from './templates/user-template';
import Login from './pages/login';
import Register from './pages/register';
import AuthTemplate from './templates/auth-template';
import Dashboard from './pages/dashboard';
import AdminTemplate from './templates/admin-template';
import UserProducts from './pages/user-products';
import ContactUs from './pages/contactUs';
import FormProduct from './pages/form-product';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <ListProducts />
    },
    {
      path: '/products/details',
      element: <Details />
    },
    {
      path: '/products/search',
      element: <SearchProducts />
    },
    {
      path: '/identity',
      element: <UserTemplate><OurIdentity /></UserTemplate>
    },
    {
      path: '/login',
      element: <AuthTemplate><Login /></AuthTemplate>
    },
    {
      path: '/register',
      element: <AuthTemplate><Register /></AuthTemplate>
    },
    {
      path: '/dashboard',
      element: <AdminTemplate><Dashboard /></AdminTemplate>
    },
    {
      path: '/my-products',
      element: <AdminTemplate><UserProducts /></AdminTemplate>
    },
    {
      path: '/form-product',
      element: <AdminTemplate><FormProduct /></AdminTemplate>
    },
    {
      path: '/contact-us',
      element: <AdminTemplate><ContactUs /></AdminTemplate>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return (
    <div>
      {/* <UserTemplate>
        <p>Oi</p>
      </UserTemplate> */}
      <RouterProvider router={router} />
    </div>
  );
}
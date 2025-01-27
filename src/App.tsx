import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';
import Home from './pages/home';
import ListRecentsProducts from './pages/list-recents-products';
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
import ListAllProducts from './pages/list-all-products';
import { ToastContainer } from 'react-toastify';
import FormProductEdit from './pages/form-product-edit';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/all-recents-products',
      element: <ListRecentsProducts />
    },
    {
      path: '/all-products',
      element: <ListAllProducts />
    },
    {
      path: '/products/details/:id',
      element: <Details />
    },
    {
      path: '/products/search/:product',
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
    }, {
      path: '/form-product-edit/:id',
      element: <AdminTemplate><FormProductEdit /></AdminTemplate>
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
      <ToastContainer />
      {/* <UserTemplate>
        <p>Oi</p>
      </UserTemplate> */}
      <RouterProvider router={router} />
    </div>
  );
}
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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import './App.css';
import Main from './Layout/Main';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import { ProductAndCartLoader } from './ProductAndCartLoader/ProductAndCartLoader';
import Signup from './Components/Signup/Signup';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Shop></Shop>

        },
        {
          path:'/review',
          loader: ProductAndCartLoader,
          element:<PrivateRouter><Review></Review></PrivateRouter>
        },
        {
          path:'/inventory',
          element:<PrivateRouter><Inventory></Inventory></PrivateRouter>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element: <Signup></Signup>
        },
        {
      path: '/*',
      element: <h1>Not Found</h1>
    }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import './App.css';
import Main from './Layout/Main';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import { ProductAndCartLoader } from './ProductAndCartLoader/ProductAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: async() => {
            return fetch('products.json')
          },
          element: <Shop></Shop>

        },
        {
          path:'/review',
          loader: ProductAndCartLoader,
          element:<Review></Review>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path: '/login',
          element:<Login></Login>
        }
      ]
    },
    {
      path: '/*',
      element: <h1>Not Found</h1>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

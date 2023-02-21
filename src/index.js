import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
// import Login from './pages/Login';
import NotFound from './pages/NotFound';
// shoppy
import AllProducts from './pages/AllProducts';
import NewProducts from './pages/NewProducts';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
// todos
import Todos from './pages/Todos';
// youtube
import Videos from './pages/Videos';
import VideosDetail from './pages/VideosDetail';

import reportWebVitals from './reportWebVitals';

/**
 *
 * <App>
 * / 👉 <Home>
 * /products 👉 <AllProducts>
 * /products/new 👉 <NewProduct>
 * /products/:id 👉 <ProductDetail>
 * /carts 👉 <MyCart>
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/new', element: <NewProducts /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/carts', element: <MyCart /> },
      // { index: true, element: <Videos /> },
      // { path: '/loginss', element: <Login /> },
      { path: '/todos', element: <Todos /> },
      { path: '/videos', element: <Videos /> },
      { path: '/videos/:keyword', element: <Videos /> },
      { path: '/videos/watch/:videoId', element: <VideosDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

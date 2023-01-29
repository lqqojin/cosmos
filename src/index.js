import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';
import Videos from './pages/Videos';
import VideosDetail from './pages/VideosDetail';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: '/login', element: <Login /> },
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

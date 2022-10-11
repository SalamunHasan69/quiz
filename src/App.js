import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layouts from './components/Layouts';
import Rechart from './components/Rechart';


function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts></Layouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/rechart',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Rechart></Rechart>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;

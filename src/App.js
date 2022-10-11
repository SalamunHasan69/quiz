import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import Layouts from './components/Layouts';
import Rechart from './components/Rechart';


function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts></Layouts>,
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
          path: '/rechart',
          element: <Rechart></Rechart>
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

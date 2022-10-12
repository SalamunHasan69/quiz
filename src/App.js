import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layouts from './components/Layouts';
import Quiz from './components/Quiz';
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
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
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
        {
          path: '/quiz/:id',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
      ]
    }
  ])

  return (
    <div class='body'>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;

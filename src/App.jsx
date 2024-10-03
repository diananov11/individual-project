
import Error from './pages/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Motivation from './pages/Motivation';
import MainLayout from './components/MainLayout';
import About from './pages/About';


function App() {


  const router = createBrowserRouter([{
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/motivation",
        element: <Motivation />
      },
    ]
  },

  {
    path: "*",
    element: <Error />
  }
  ]);



  return (
    <RouterProvider router={router} />)
}

export default App

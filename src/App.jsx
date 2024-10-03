
import Error from './pages/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'


function App() {


  const router = createBrowserRouter([{
    // element: <TemplatePage />,
    children: [
      {
        path: "/",
        element: <Home />
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

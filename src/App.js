
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomeMain from './Layout/Home/HomeMain';
import AdminMain from './Layout/Admin/AdminMain';
import Home from './Commponets/Home/Home';
import Dashboard from './Commponets/Admin/Dashboard';
import Category from './Commponets/Admin/Category/category';
import Login from './Auth/Login';
import Register from './Auth/Register';
import PrivateRoute from './Route/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <HomeMain></HomeMain>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/Blog',
          element:<h1>Blog</h1>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'*',
          element:<h1>404</h1>
        },
      ],
     
    },
    // Admin Section Start -----------------------------------------------------
    {
      path:'/admin',
      element: <AdminMain></AdminMain>,
      children:[
        {
          path:'/admin/dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path:'/admin/Category',
          element:<Category></Category>
        },
  
        
      ],
     
    },
    // Admin Section End -----------------------------------------------------


  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
    
  );
}

export default App;

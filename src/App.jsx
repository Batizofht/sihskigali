import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Footer from './component/Footer'
import Register from './component/Register'
import Login from './component/Login'
import Navbar
 from './component/Navbar'
import Error from './component/Error'
import Student from './component/Student'
import Teacher from './component/Teacher'
import About from './component/About'
import { Timetables } from './user/Timetables'
import Dashboard from './user/Dashboard'
import { useContext } from 'react'
import { AuthContext } from './ahook/Auth'
import Nav from './user/Nav'
import Nothing from './user/Nothing'
import Class from './user/Class'
import Exam from './user/Exam'
import Chat from './user/Chat'
import Admin from './component/Admin'
import Profile from './user/Profile'
import Adminslogin from './component/Admins'
import SittingPlan from './user/SittingPlan'
import Plan from './user/Plan'
import All from './user/All'
import ExPlan from './user/ExPlan'

const Layout = () => {
  return (
    <>
    
      <Navbar />
      
      <Footer />
    </>
  );
};
const Userlayout = () =>{
  const {user} = useContext(AuthContext);
  if(user){
    console.log("okay");
  }
  return(
    <>
   <Nav />
    </>
  )
}
const userrouter = createBrowserRouter([
  {
    path: '/',
    element: <Userlayout />,
    errorElement: <Nothing />,
 
    children: [
      {
        path: "/",
        element: <Dashboard />

      },
      {
         path: "/Dashboard",
         element: <Dashboard />
      },
      {
        path: "/Timetables",
        element: <Timetables />
      },
      {
        path:"/Class",
        element: <Class />
      },
      {
        path:"/Profile",
        element: <Profile />
      },
      {
        path: "/Exam",
        element: <Exam />
      }
      ,
      {
        path: "CHat",
        element: <Chat />
      },
      {
        path: "SittingPlan",
        element: <SittingPlan />
      },
      {
        path: "Plan",
        element: <Plan />
      }
      ,{
        path : "All",
        element : <All />
      },
      {
        path: "ExPlan",
        element: <ExPlan />
      }
      // Add more routes for other user-specific components if needed
    ]
  },
  // Add other routes for authenticated users
]);
const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Admins",
        element: <Adminslogin />
      },
      {
        path:"/Home",
        element: <Home />
      }
      ,{
        path: "/Student",
        element:<Student />
      }
      ,
      {
        path: "/Teacher",
        element: <Teacher />
      }
      ,
      {
        path: "Admin",
        element: <Admin />
      }
      ,
      {
        path: "/About",
        element: <About />
      }
      
    ],
  },
  {
    path: "/register",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: < Timetables/>,
  },
]);

function App() {
  const {user} = useContext(AuthContext);
  const {loading} = useContext(AuthContext);
console.log("length ===>",user)

if(loading){
  return(
    <div>
        <div className='d-flex justify-content-center align-items-center text-center ' style={{height:"100vh"}}>
      <div className=''>
        
        <div class="text-center">
 
 <img style={{opacity:0.5}} src='http://sihs.education/mysite/images/icons/logo.png' width="120" />
        </div>
        <div class="spinner-border " style={{ color:"blue"}} role="status">
   
   </div>
        <h1 className='text-muted fs-3'>Loading....</h1>
    
      </div>
    </div>
    </div>
  )
}

  return (
    <div >
      {
        user !=null  ?  
        <>
         <RouterProvider router={userrouter} /> 
        </>
         : 
        <> 
         <RouterProvider router={router} />
        </>
      }
   
    </div>
  )
}

export default App

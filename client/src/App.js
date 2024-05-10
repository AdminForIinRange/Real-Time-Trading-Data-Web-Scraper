import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";


import Home from './components/Home'
import Landing from './components/Landing'
import Auth from './components/Auth'
import Systems from './components/Systems'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Landing />} />
      <Route path="Auth" element={<Auth />}/>
      <Route path="Home" element={<Home />} />
      <Route path="Systems" element={<Systems />} />
    
    


    </Route>
  )
);



export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}
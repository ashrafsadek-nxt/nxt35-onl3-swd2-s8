// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { createBrowserRouter, RouterProvider,Route,Router,Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { LangProvider } from "./Context/LangContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register/Register";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Product from "./assets/Page/Productee";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Navbar ثابت
      children: [
        { path: "/", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "/register", element: <Register /> },
        { path: "/product", element: <ProtectedRoute><Product /></ProtectedRoute> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <LangProvider>
        <RouterProvider router={router} />
      </LangProvider>
    </AuthProvider>
  );
}

export default App;





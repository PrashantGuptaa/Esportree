import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/home';
import AboutUs from './containers/aboutUs';
import { useEffect, useState } from "react";

import {  Outlet,  } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Esportree from "./pages/Esportree";
import {  useSelector } from "react-redux";
import 'tailwindcss/tailwind.css'

function App() {
  // const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  // const [open, setopen] = useState(false);
  const Layout = () => {
    const obj = useSelector((state) => state.CounterSliceReducer);
    const [loading, setloading] = useState(false);
    useEffect(() => {
      window.onload = () => {
        setloading(true);
        setTimeout(() => {
          setloading(false);
        }, 1500);
      };
    }, []);
    return <>{loading ? <Esportree /> : <Outlet />}</>;
  };
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

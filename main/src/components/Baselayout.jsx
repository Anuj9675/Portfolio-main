import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Works from "./Works/Works";
import Contact from "./contacts/contact";
import Footer from "./footer/Footer"
import { Route, Routes } from "react-router-dom";


const Base = () => {
  return (
    
    <>
    <Navbar/>
    
    <Routes>
        <Route exact path={"/"} element={<Hero/>}/>
        <Route exact path={"/about"} element={<About/>} />
        <Route exact path={"/works"} element={<Works/>} />
        <Route exact path={"/contact"} element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
    
  );
};

export default Base;

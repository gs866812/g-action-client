import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Price from "./Pages/Price";
import Contact from "./Pages/Contact";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/> 
                <Route path="/services" element={<Services/>}/> 
                <Route path="/portfolio" element={<Portfolio/>}/> 
                <Route path="/pricing" element={<Price/>}/> 
                <Route path="/contact" element={<Contact/>}/> 
            </Routes>
        </Router>
    );
};

export default AppRoutes;
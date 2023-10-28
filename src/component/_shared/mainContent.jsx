import React from "react";
import House from "../../container/house/house";
import Home from "../../container/home";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {

    return (
        <div className='mainContent'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/House" element={<House />} />
            </Routes>
        </div>);
};

export default MainContent;
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from '../Pages/HomePage/Homepage';
import Details from '../Pages/Details/Details';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Details" element={<Details/>}/>
    </Routes>
  );
}

export default Router
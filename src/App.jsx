import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buy from "./pages/buy/Buy"
import Login from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp"
import Home from "./pages/home/Home"
import Sell from './pages/sell/Sell';
import Rent from './pages/rent/Rent';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/buy" element={<Buy/>} />
            <Route path="/sell" element={<Sell/>} />
            <Route path="/rent" element={<Rent/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
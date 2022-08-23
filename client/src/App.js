import './index.css';
import Navbar from './Navbar';
import Login from './Login';
import React from 'react';
import SignUp from './SignUp';
import Activity from './Activity';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>  
    <nav> <Navbar></Navbar> </nav>
    <Routes>
      <Route exact path='/' element={ <Login></Login>}></Route>

      <Route path='signup' element={<SignUp></SignUp>}></Route>

      <Route path='activities' element={<Activity></Activity>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

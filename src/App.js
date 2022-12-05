import './App.css';
import React, {useEffect, useState} from 'react';
import MainStore from "./components/MainStore";
import ProductDetails from "./components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
          <Route exact path='/' element={< MainStore />}></Route>
          <Route path="/details/:id" element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
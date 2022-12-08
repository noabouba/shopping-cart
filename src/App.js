import './App.css';
import React from 'react';
import MainStore from "./components/MainStore";
import ProductDetails from "./components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';
import Cart from './components/shopping-cart/cart';


function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
          <Route exact path='/' element={< MainStore />}></Route>
          <Route path="/details/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
import './App.css';
import React from 'react';
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
          <Route exact path='/' element={< ProductList />}></Route>
          <Route path="/details/:id" element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
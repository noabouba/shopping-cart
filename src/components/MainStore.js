import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from './ProductList.js';

import Title from "./Title";

function MainStore() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/products", {
          method: 'GET',
          headers: {
          accept: 'application/json',
          },
      })
      .then((res) => res.json())
      .then((data) => { setProducts(data); console.log(data)})
      .catch(error => {console.error('There was an error!', error);
      });;
  }, []);

  return (
    <div>
      <Title name="our" title="Cooktails"/>
      <ProductList products={products} isInCart={false}></ProductList>
    </div>
  );
}

export default MainStore;
import React, {useState, useEffect}  from 'react';
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from '../data.js';
import { getDefaultNormalizer } from '@testing-library/react';

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products", {
            method: 'GET',
            headers: {
            accept: 'application/json',
            },
        })
        .then((res) => console.log("dgbhjhj"))
        // .then((data) => {console.log("dd"); setProducts(data.message); })
        .catch(error => {
            console.error('There was an error!', error);
        });;
    }, []);

    return (
        <div className="py-3">
            <div className="container">
                <Title name="our" title="Shoes"/>
                <div className="row">
                    { storeProducts.map(product =>{
                        return <Product product={product} key={product.id} isCartView={false}/>;
                    })
                    }
                </div>
            </div> 
        </div>
    );
}

export default ProductList;
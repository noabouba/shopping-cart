import React from 'react';
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from '../data.js';

function ProductList() {
    return (
        <div className="py-3">
            <div className="container">
                <Title name="our" title="Shoes"/>
                <div className="row">
                    { storeProducts.map(product =>{
                        return <Product product={product} />;
                    })
                    }
                </div>
            </div> 
        </div>
    );
}

export default ProductList;
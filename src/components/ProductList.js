import React from 'react';
import Product from "./Product";
// import {storeProducts} from '../data.js';

function ProductList(props) {

    return (
        <div className="py-3">
            <div className="container">
                <div className="row">
                    { props?.products?.map(product =>{
                        return <Product product={product} key={product._id} isCartView={props.isCartView}/>;
                    })
                    }
                </div>
            </div> 
        </div>
    );
}

export default ProductList;
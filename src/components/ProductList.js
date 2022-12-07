import React from 'react';
import Product from "./Product";

function ProductList(props) {

    return (
        <div className="py-3">
            <div className="container">
                <div className="row">
                    { props?.products?.map(product =>{
                        return <Product product={product} key={product._id} isInCart={props.isInCart}/>;
                    })
                    }
                </div>
            </div> 
        </div>
    );
}

export default ProductList;
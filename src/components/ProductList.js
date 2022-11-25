import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from '../data.js';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">
                    <Title name="our" title="Shoes"/>
                       <div className="row">
                            { storeProducts.map(product =>{
                                return <Product key={product.id} product={product} />;
                            })
                            }
                       </div>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}

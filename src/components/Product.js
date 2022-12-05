import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';
import addToCart from '../productService.js';

function Product(props) {
    const {_id, name, image, price} = props.product;
    
    return (
        <div className="col-9 mx-auto col-md-5 my-2">
            <Link to={`details/${_id}`} style={{"textDecoration": "none", "color":"inherit"}}>
                <div className="card">
                    <div className="card-footer d-flex justify-content-between">
                        <span className="align-self-center mb-0">
                            {name}
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </span>

                        <h5 className="mb-0">
                            <img src={image} alt="product" className="card-img-top" />
                        </h5>
                    </div>
                </div>
            </Link>
            {!props.isCartView ? 
                <button  className='cart-btn' onClick={()=> {addToCart(props.product)}}> + 
                </button> 
                : <div/>
            }
           
        </div>
    );
}

export default Product;
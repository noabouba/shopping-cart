import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

function Product(props) {
    const {id, title, firstImage, price} = props.product;
    
    return (
        <div className="col-9 mx-auto col-md-5 my-2">
            <Link to={`details/${id}`} style={{"textDecoration": "none", "color":"inherit"}}>
                <div className="card">
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </p>

                        <h5 className="mb-0">
                            <img src={require(`../${firstImage}`)} alt="product" className="card-img-top" />
                        </h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Product;
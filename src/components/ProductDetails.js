import React from 'react';
import {withRouter, ButtonContainer} from '../Utils.js';
import {Link} from 'react-router-dom';
import {getProduct} from '../productService.js';

function ProductDetails(props) {
    const { name, image, price, description} = getProduct(props.router.params.id);
    console.log(name)
    return (
        <div className="container">
            <div className="mx-auto text-center my-4">
                <h1>{name}</h1>
            </div>
            <div className="row" style={{"backgroundColor":"#f6f6f6"}}>
                <div className="col-10 mx-auto col-md-6 my-3" style={{'borderRight': "solid black 3px"}}>
                    <img src={image} className="img-fluid mx-auto col-6" alt="product" />
                 </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model:{name}</h2>
                    <h4 className="text-blue">
                        <strong>
                            Price : <span>$</span>{price}
                        </strong>
                    </h4>
                    <p className="text-muted lead">
                        {description}
                    </p>
                    
                    <Link to="/">
                            <ButtonContainer>
                                Go to products
                            </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                            <ButtonContainer>
                                Go to cart
                            </ButtonContainer>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ProductDetails);
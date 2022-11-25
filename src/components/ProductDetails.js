import React, { Component } from 'react';
import {storeProducts} from '../data.js';
import {withRouter, ButtonContainer} from '../Utils.js';
import {Link} from 'react-router-dom';

class ProductDetails extends Component {
    render() {
        const {title, firstImage, secondImage, price, company, info} = storeProducts.at((this.props.router.params.id))

        return (
            <React.Fragment>
                <div>
                    <div className="container" >
                        <div >
                            <div className="mx-auto text-center my-4">
                                <h1>{title}</h1>
                            </div>
                            <div className="row" style={{"background-color":"#f6f6f6"}}>
                                <div className="col-10 mx-auto col-md-6 my-3" style={{'border-right': "solid black 3px"}}>
                                    <img src={require(`../${firstImage}`)} className="img-fluid mx-auto col-6" alt="product" />
                                    <img src={require(`../${secondImage}`)} className="img-fluid mx-auto col-6" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Buy at {company}
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    
                                    <Link to="/">
                                           <ButtonContainer>
                                               back to products
                                           </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(ProductDetails);
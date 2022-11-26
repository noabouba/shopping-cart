import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    render() {
        const {id, title, firstImage, price} = this.props.product;
        
        return (
            <ProducrWrapper className="col-9 mx-auto col-md-5 my-2">
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
            </ProducrWrapper>
        );
    }
}

const ProducrWrapper =styled.div`
img{
    height:100px;
    width:100px;
}
.card{
    border-color:tranparent;
    transition:all 1s linear;
    background-color:#f6f6f6;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
    padding:inherit !important;
    padding-left:5% !important;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        cursor:pointer;
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container:hover .cart-btn{
    transform:translate(0, 0);
}

`;
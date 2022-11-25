import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    render() {
        const {id, title, firstImage, price} = this.props.product;
        
        return (
            <ProducrWrapper className="col-9 mx-auto col-md-6 my-3">
               <div className="card">
                    {
                        <Link to={`details/${id}`}>
                            <img src={firstImage} alt="product" className="card-img-top" />
                        </Link>
                    }

                 <div className="card-footer d-flex justify-content-between">
                     <p className="align-self-center mb-0">
                         {title}
                     </p>
                     <h5 className="text-blue font-italic mb-0">
                         <span className="mr-1">$</span>
                         {price}
                     </h5>
                 </div>
               </div>
            </ProducrWrapper>
        );
    }
}

const ProducrWrapper =styled.div`
.card{
    border-color:tranparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
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
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
     transition:all 1s linear;
}
// .img-container:hover .card-img-top{
//     transform:scale(1.2);
// }
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5 rem 0 0 0;
    transform:translate(100%, 100%);
    transition:all 1s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0, 0);
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`;
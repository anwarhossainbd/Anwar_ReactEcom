import React, {Fragment, useContext} from 'react';
import {ProductContext} from "../Global/ProductContext";
import Banner from "./Banner";

const Products = () => {

    const data=useContext(ProductContext);
    const {products} =data ;

    return (

        <Fragment>
            <Banner />
            <div className="container mt-5">
                <div className="products text-center ">
                    {products.map((products)=>(
                        <div className="product" key={products.id}>
                            <div className="product-image">
                                <img src={products.image} alt="not found" />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    {products.name}
                                </div>
                                <div className="product-price">
                                    ${products.price}.00
                                </div>
                            </div>
                            {products.status==='hot'? <div className="hot">Hot</div>:""}
                            {products.status==='new'? <div className="new">New</div>:""}

                            <div className="add-to-cart">
                                Add to Cart
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </Fragment>


    );
};

export default Products;
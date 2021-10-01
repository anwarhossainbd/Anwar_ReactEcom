import React, {createContext, useState} from 'react';

import AppleLaptop from "../Assets/AppleLaptop.jpg";
import Iphone from "../Assets/IPhone.jpg";
import Camera1 from "../Assets/Camera1.jpg";
import Camera2 from "../Assets/Camera2.jpg";
import HeadPhone1 from "../Assets/HeadPhone1.jpg";
import Watch1 from "../Assets/Watch1.jpg"
import Watch2 from "../Assets/Watch2.jpg"
import Mobile from "../Assets/Mobile.jpg"
import HeadPhone2 from "../Assets/HeadPhone2.jpg"

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const  [products]=useState([

        {id:1,name:"Apple Laptop", price:205000 , image:AppleLaptop , status:"hot"},
        {id:2,name:"I-Phone", price:75000 , image:Iphone , status:"new"},
        {id:3,name:"Lumix Camera", price:20000 , image:Camera1 , status:"hot"},
        {id:4,name:"G-Shock", price:7000 , image:Watch1 , status:"hot"},
        {id:5,name:"D-Shock", price:5000 , image:Watch2 , status:"new"},
        {id:6,name:"Huawei Mobile", price:25000 , image:Mobile , status:"hot"},
        {id:7,name:"HeadPhone 1", price:1000 , image:HeadPhone1 , status:"hot"},
        {id:8,name:"HeadPhone 2", price:1200 , image:HeadPhone2 , status:"new"},

    ]);



    return (
        <ProductContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
import React, {createContext, useState} from 'react';

import AppleLaptop from "../Assets/AppleLaptop.jpg";
import Laptop2 from "../Assets/Laptop2.jpg";
import Camera1 from "../Assets/Camera1.jpg";
import Camera2 from "../Assets/Camera2.jpg";
import HeadPhone1 from "../Assets/HeadPhone1.jpeg";
import Watch1 from "../Assets/Watch1.png"
import Mobile from "../Assets/Mobile.png"
import Myfav from "../Assets/MyfavouriteHadephone.jpg"

export const ProductContext = createContext()

const ProductContextProvider = () => {

    const  [products]=useState([

        {id:1,name:"Apple Laptop", price:205000 , image:AppleLaptop , status:"hot"},
        {id:2,name:"Lumix Camera", price:15000 , image:Camera1 , status:"new"},
        {id:3,name:"Leica Camera", price:20000 , image:Camera2 , status:"hot"},
        {id:4,name:"Dell-Laptop", price:105000 , image:Laptop2 , status:"hot"},
        {id:5,name:"Rolex", price:12000 , image:Watch1 , status:"new"},
        {id:6,name:"Huawei Mobile", price:25000 , image:Mobile , status:"hot"},
        {id:7,name:"HeadPhone 1", price:1000 , image:HeadPhone1 , status:"hot"},
        {id:8,name:"HeadPhone 2", price:1200 , image:Myfav , status:"new"},

    ]);



    return (
        <ProductContext.Provider>
            {props.children()}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
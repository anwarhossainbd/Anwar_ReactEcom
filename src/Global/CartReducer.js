import React from 'react';



export const CartReducer = (state,action) => {
    const {shoppingCart,totalPrice,qty}=state ;
    let product ;
    let index ;
    let updatedPrice;
    let updatedQty;
   switch (action.type){
       case "ADD_TO_CART":
           const check=shoppingCart.find(pro=>pro.id===action.id) ;
           if (check){
               return state ;
           }
           else {
               product =action.products ;
               product['qty'] =1 ;
               updatedQty =qty+1 ;
               updatedPrice =totalPrice+product.price;
               return {shoppingCart:[product,...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
           }
           break ;

       default: return state ;
   }
};


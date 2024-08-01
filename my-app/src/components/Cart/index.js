import React from 'react';

import CartContext from '../../CartContext/CartContext'; 

import NavBar from '../Navbar';
import CartSummary from '../CartSummary';
import EmptyCartView from '../EmptyCartView';


import "./index.css"
import CartItem from '../CartItem';

const Cart = () => (
    <CartContext.Consumer>
    {value => {
      const {cartList, removeCartItem,} = value
      const showEmptyView = cartList.length === 0
  
      const onRemoveCartItem = (id) => {
        removeCartItem(id)
      }

    return (
      <><NavBar />
        <div className="cart-container">
            
            {showEmptyView ? <EmptyCartView /> : 
            <>
            
            <CartItem />
            <CartSummary />
            </>}
        </div>
        </>
    );
}}
    </CartContext.Consumer>
)




export default Cart;

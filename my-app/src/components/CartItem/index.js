import { CiSquareRemove } from "react-icons/ci";
import CartContext from '../../CartContext/CartContext'; 


import "./index.css"

const CartItem = () =>(
    <CartContext.Consumer>
    {value => {
      const {cartList, removeCartItem,} = value
    
      const onRemoveCartItem = (id) => {
        removeCartItem(id)
      }

    return(
       <> {cartList.map(item => (    
            <div className="cart-item" key={item.id}>
                 <div className='img-text'>
                <img src={item.imgSrc} className="cart-img" alt="img" />
                <div className="cart-text">
                    <p className="cart-address">{item.address}</p>
                    <div className='beds-baths'>
                    <p className="cart-beds">{item.beds} Rooms</p>
                    <p className="cart-baths">{item.baths} Rooms</p>
                    </div>
                    <h3 className="cart-price">Rs {item.price}</h3>
                </div>
                </div>
               <button type="button" className="remove-btn" onClick={() => onRemoveCartItem(item.id)}><CiSquareRemove size={25} /></button> 
            </div>
        ))}
        
</>
    )
    }}
    </CartContext.Consumer>
)

export default CartItem
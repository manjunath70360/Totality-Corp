import CartContext from "../../CartContext/CartContext";


import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";

import {Link} from 'react-router-dom'

import "./index.css"

const NavBar = () =>(
<CartContext.Consumer>
    {value => {
      const {cartList} = value
      
     
return(
   <><div className='nav-container'>
    <h1 className='logo-name'>Rentals</h1>
    <div className='icon-container-nav'>
    <Link to="/home" className="nav-link"><FaHome className="icon" size={20}/></Link>
    
    <Link to="/cart" className="nav-link"><div className="total-cart"><FaCartShopping className="icon" size={18}/> <p className="total">{cartList.length}</p> </div></Link>
    <Link to="/" className="nav-link"> <BiSolidLogOut className="icon" size={20}/></Link>
    </div>
   </div>
   </>
)
}}
  </CartContext.Consumer>
)
export default NavBar
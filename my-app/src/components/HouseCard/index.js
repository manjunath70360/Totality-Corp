import React, { useContext } from 'react';
import CartContext from '../../CartContext/CartContext'; 

import { GrMapLocation } from "react-icons/gr";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";


import "./index.css"

const HouseCard = (props) => {
    const { details } = props;
    const { id, imgSrc, statusType, price, address, beds, baths, area } = details;
    

    const { addCartItem } = useContext(CartContext);

    const onClickBookNow = () => {
   
        addCartItem(details);
    }

    return (
        <div className="card-container">
            <img src={imgSrc} className="img" alt="img" />
            <div className="text-container">
                <h1 className="price">Rs {price}</h1>
                <p className="para"> <MdOutlineBedroomChild className='icon' size={20}/> <span className="bold-para"> {beds}</span> beds |  <LuBath className='icon' size={20}/> <span className="bold-para">{baths}</span> baths | <LiaExternalLinkSquareAltSolid className='icon' size={20}/> <span className="bold-para">{area}</span> sqft </p>
                <p className="address"><GrMapLocation className='icon' size={20}/> {address}, India</p>
            </div>
            <button type="button" className="book-btn" onClick={onClickBookNow}>Add To Cart</button>
          </div>
    );
}

export default HouseCard;

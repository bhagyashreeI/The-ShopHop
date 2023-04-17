import React, { useEffect, useState } from 'react';
import './Cart.css';


import { FaRegHeart } from 'react-icons/fa';

import { BsCartPlus } from 'react-icons/bs';

import { AiOutlineHeart, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineDelete } from 'react-icons/ai';


export default function CartItem({ onClick, Name, price, Quantity, picture }){

    const [inputValues, setQuantity] = useState({quantity:Quantity});

    const handleQuantityInput = (ev) => {
        setQuantity({...inputValues,[ev.target.name]:ev.target.value})
    }
    return(
        <div className="item" >
                    <div className="">
                <span className="delete-btn" onClick={() => onClick()}><AiOutlineDelete></AiOutlineDelete></span>
                        <span className="like-btn"><AiOutlineHeart></AiOutlineHeart></span>
                    </div>

                    <div className="image">
                <img src={picture} width='120' height='80' alt={Name} />
                    </div>

                    <div className="description">
                        <span>{Name}</span>
                        <span>Description</span>
                        <span>Category</span>
                    </div>

                    <div className="quantity">
                        <button className="plus-btn" type="button" name="button">
                            <AiOutlinePlusCircle></AiOutlinePlusCircle>
                        </button>
                <input type="text" name="quantity" value={inputValues.quantity} onChange={handleQuantityInput} />
                            <button className="minus-btn" type="button" name="button">
                            <AiOutlineMinusCircle></AiOutlineMinusCircle>
                            </button>
                    </div>

                    <div className="total-price">{price}</div>
                </div>
        
    )
}
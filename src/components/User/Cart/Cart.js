import React, { useEffect, useState } from 'react';
import { APIURL } from '../../../constants/global';
import CartItem from './CartItem';
import './Cart.css';
import useAuthCheck from '../../../useAuthCheck';
export default function Cart() {
    const usertoken = localStorage.getItem('auth_token');
    const [cartList, setCartList] = useState();
    const {getUToken} = useAuthCheck();

    console.log('====================================');
    console.log("my cart", getUToken());
    console.log('====================================');

    const fetchCart = () => {
        let requestoptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${usertoken}` }
            //body: JSON.stringify({ cartKey:localStorage.getItem('cartKey')})
        }
        fetch(APIURL + '/get-cart/' + localStorage.getItem('cartKey'), requestoptions).then(async res => {
            let resdata = await res.json();
            console.log("getcart", resdata.cartItems);
            setCartList(resdata.cartItems)
        }).catch(err => { console.log("getcart err", err) })
    }

    const removeFromCart = (citemid) => {

    }
    useEffect(() => {
       fetchCart();
    }, []);

    return (
        <div>
            <h3>Shopping Cart</h3>
            <div>
            </div>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                </div>
                <div>
                    {cartList && (
                        <div className="cart__body">
                            {cartList.map(item => (
                                <CartItem key={item.CartItemId} {...item} onClick={() => removeFromCart(item.CartItemId)} />
                            ))}
                        </div>
                    )}
                </div>

                
            </div>


            
        </div>
    );
}
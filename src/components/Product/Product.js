import React,{useState} from 'react';
import {FaRegHeart} from 'react-icons/fa';

import {BsCartPlus} from 'react-icons/bs';
import {APIURL} from '../../constants/global';

export default function Product({title,description,picture,price,instock,usertoken,pid}) {
  const style = {marginLeft: '10px', fontSize: '1.5em'};

  
  const setCart = (pid) => {
    let requestoptions = {
        method:'POST',
        headers: { 'Content-Type': 'application/json',"Authorization" : `Bearer ${usertoken}` },
        body: JSON.stringify({ utoken:usertoken})
      }
      fetch(APIURL+'/create-cart',requestoptions).then(async res=>{
        let resdata = await res.json();
        localStorage.setItem('cartKey',resdata.cartKey);
        localStorage.setItem('cartToken',resdata.cartToken);
        localStorage.setItem('cartId', resdata.cartToken);
        addProductToCart(pid);
      }).catch(err=>{console.log("setCart err",err)})
  }
  const getCart = () => {
    let requestoptions = {
        method:'GET',
        headers: { 'Content-Type': 'application/json',"Authorization" : `Bearer ${usertoken}` }
        //body: JSON.stringify({ cartKey:localStorage.getItem('cartKey')})
      }
      fetch(APIURL+'/get-cart/'+localStorage.getItem('cartKey'),requestoptions).then(async res=>{
        let resdata = await res.json();
        localStorage.setItem('cartId',resdata.cartId);
        console.log("getcart",resdata)
      }).catch(err=>{console.log("getcart err",err)})
  }

  const addProductToCart = (pid) => {
    let requestoptions = {
        method:'POST',
        headers: { 'Content-Type': 'application/json',"Authorization" : `Bearer ${usertoken}` },
        body: JSON.stringify({ cartKey:localStorage.getItem('cartKey'),productID:pid,quantity:1})
      }
      fetch(APIURL+'/addProduct',requestoptions).then(async res=>{
        let resdata = await res.json();
        console.log("prod res",resdata)
      }).catch(err=>{console.log("setCart err",err)})
  }

  const handleAddCartClick = (ev) => {
    if(usertoken == null){
      
    }else{
      alert("fdfd")
      
      if(localStorage.getItem('cartId') === null){
        setCart(ev);
        
      }else{
        getCart();
        addProductToCart(ev);
      }
      
      
      
    }
  }

  return (
    <div className="card m-2">
  <img className="card-img-top img-thumbnail" src = {picture}  height = '300' alt="Gold jewelery" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {description.substring(0, 100)}
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Price: {price}</li>
    
  </ul>
  <div className="card-body">
    {!instock ? <li className="list-group-item" ><span className="text-danger">Out of stock</span></li> : 
    <BsCartPlus title='Add to Cart' style = {style} onClick={(ev) => handleAddCartClick(pid)}/>}
    <FaRegHeart title="Wishlist" style = {style}/>
  </div>
</div>

    
  );
}

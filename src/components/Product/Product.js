import React from 'react';
import {FaRegHeart} from 'react-icons/fa';

import {BsCartPlus} from 'react-icons/bs';

export default function Product({title,description,picture,price,instock}) {
  const style = {marginLeft: '10px', fontSize: '1.5em'};

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
    {!instock && <li className="list-group-item" ><span className="text-danger">Out of stock</span></li>}
  </ul>
  <div className="card-body">
    <BsCartPlus title='Add to Cart' style = {style}/>
    <FaRegHeart title="Wishlist" style = {style}/>
  </div>
</div>

    
  );
}

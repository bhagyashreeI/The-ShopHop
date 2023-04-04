import React from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

export default function Product({title,description,picture,price,rating}) {
  return (
    <div className="card m-2">
  <img className="card-img-top" src = {picture}  height = '300' alt="Gold jewelery" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {description}
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Price: {price}</li>
    <li className="list-group-item">Rating: {rating.rate} ({rating.count})</li>
  </ul>
  <div className="card-body">
    <a className="card-link m-1">Add to Cart</a>
    <FaRegHeart title="Wishlist"/>
  </div>
</div>

    
  );
}

import React, {useState, useEffect} from 'react';
import Product from './Product/Product';

export default function Products(){
//const [prodcount,setProdCount] = useState(0);
const [products, setProducts] = useState ();




useEffect (() => {
  fetchJewelery();
}, []);

const fetchJewelery = () => {
  fetch('https://fakestoreapi.com/products/category/jewelery')
    .then (res => res.json ())
    .then (data => setProducts(data))
    .catch (err => console.log (err));
};

 

    return <div>
<h1>Products </h1>
<div>
<div className="row">
{products &&
            products.map((item) => {
              const { id, imageUrl } = item;
              return (
                <div key={id} className='col-sm-4'>
                  <Product title={item.title} description={item.description} picture={item.image} 
                  price={item.price}
                  rating={item.rating}
                  key={id} />
                </div>
              );
            })}
</div>
</div>
</div>
}

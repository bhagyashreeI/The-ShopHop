import React, {useState, useEffect, useReducer} from 'react';
import Product from '../Product/Product';
import {APIURL} from '../../constants/global';
//import Categories from '../Categories/Categories';
import {useParams} from 'react-router-dom';

export default function Products (props) {
  let productjewelryurl = APIURL + '/products/category/';

  const [catlist, setCatList] = useState ();
  const [activecat, setActiveCat] = useState ();

  const [prodcount, setProdCount] = useState (0);
  const [products, setProducts] = useState ();

  let category = 'jewelery';

  const fetchCategories = () => {
    fetch ('https://fakestoreapi.com/products/categories')
      .then (res => res.json ())
      .then (data => {
        setCatList (data);
        category = data[0];
        setActiveCat (0);
        fetchJewelery ();
      })
      .catch (err => console.log (err));
  };

  useEffect (() => {
    fetchCategories ();
    fetchJewelery ();
  }, []);

  const handleCategoryClick = (ev, cidex) => {
    category = ev;
    setActiveCat (cidex);
    fetchJewelery ();
  };

  const fetchJewelery = () => {
    fetch (productjewelryurl + category)
      .then (res => res.json ())
      .then (data => {
        setProducts (data);
        setProdCount (data.length);
      })
      .catch (err => console.log (err));
  };

  return (
    <div className="row mt-2">
      <div className="col-md-4">
        <h1>Categories</h1>
        <ul className="list-group">
          {catlist &&
            catlist.map ((item, inx) => {
              return (
                <li
                  className={`list-group-item text-capitalize ${activecat === inx ? 'active' : ''}`}
                  key={inx}
                  onClick={() => handleCategoryClick (item, inx)}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="col-md-8">
        <h1>Products ({prodcount}) </h1>
        <div className="row">
          {products &&
            products.map (item => {
              const {id, imageUrl} = item;
              return (
                <div key={id} className="col-sm-4">
                  <Product
                    title={item.title}
                    description={item.description}
                    picture={item.image}
                    price={item.price}
                    rating={item.rating}
                    key={id}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

import React, {useState, useEffect, useReducer} from 'react';
import Product from '../Product/Product';
import {APIURL} from '../../constants/global';
import  Categories   from '../Categories/Categories';
import {useParams} from 'react-router-dom';
import Loader from '../../container/Loader/Loader';

export default function Products (props) {
  //let productjewelryurl = APIURL + '/products/category/';
  let producturl = APIURL + '/productsbycategory/';

  const [catlist, setCatList] = useState ();
  const [activecat, setActiveCat] = useState ();

  const [prodcount, setProdCount] = useState (0);
  const [products, setProducts] = useState ();


  const fetchCategories = () => {
    fetch (APIURL+'/categories')
      .then (res => res.json ())
      .then (data => {
        setCatList (data.Categories);
        setActiveCat (data.Categories[0]['id']);
        handleCategoryClick(data.Categories[0]['id']);
      })
      .catch (err => console.log (err));
  };

  useEffect (() => {
    fetchCategories ();
    fetchProducts ();
  }, []);

  const handleCategoryClick = (ev) => {
    setProdCount (0);
    setActiveCat (ev);
    fetchProducts (ev);
  };

  const fetchProducts = (catid) => {
    fetch (producturl+catid)
      .then (res => res.json ())
      .then (data => {
        setProducts (data.Products);
        setProdCount (data.Products.length);
      })
      .catch (err => console.log (err));
  };

  return (
    <div className="row mt-2">
      <div className="col-md-4">
        <h1>Categories</h1>
        <Categories categories={catlist} filterproducts={handleCategoryClick} activecatid={activecat}></Categories>
        
      </div>
      <div className="col-md-8">

        <h1>Products ({prodcount}) </h1>
        <div>
          {prodcount == 0 && <Loader />}
        </div>

        <div className="row">
          {products &&
            prodcount > 0 &&
            products.map (item => {
              const {id, imageUrl} = item;
              return (
                <div key={id} className="col-sm-4">
                  <Product
                    title={item.Name}
                    description={item.description}
                    price={item.price}
                    instock={item.InStock}
                    picture={item.image}
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

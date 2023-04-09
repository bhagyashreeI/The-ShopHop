import React, {useEffect, useState} from 'react';
import {APIURL} from '../../constants/global';
import { Link } from 'react-router-dom';

export default function Categories (props) {
  let catapiurl = APIURL + '/products/categories';

  const [catlist, setCatList] = useState ();
  const [state, setcatname] = useState ({data: ''});

  useEffect (() => {
    fetchCategories ();
  }, []);

  const getCategoryrProducts = (catname) =>{
    fetch ('https://fakestoreapi.com/products/category/'+catname)
  .then (res => res.json ())
  .then (data => {
  })
  .catch (err => console.log (err));

  }


  const fetchCategories = () => {
    fetch ('https://fakestoreapi.com/products/categories')
      .then (res => res.json ())
      .then (data => {
        setCatList (data);
      })
      .catch (err => console.log (err));
  };

  const handleCategoryClick = (catname) => {
    //alert(catname);
    setcatname({data:catname}); 
       
  }

  return (
    <div>
    <ul className="list-group">
  {catlist &&
    catlist.map ((item, inx) => {
      return (
        <li
          className="list-group-item text-capitalize"
          key={inx} data={state.data}
          onClick={() => handleCategoryClick (item)}
        >

          {item}

        </li>
      );
    })}
</ul>



    </div>
    

    
  );
}

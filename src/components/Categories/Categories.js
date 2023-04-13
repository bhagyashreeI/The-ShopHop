import React from 'react';

export default function Categories ({categories,filterproducts,activecatid}) {
  //alert(activecatid);

  return (
    <div>
    <ul className="list-group">
  {categories &&
    categories.map ((item, inx) => {
      return (
        <li
          className={`list-group-item text-capitalize ${activecatid === item.id ? 'active' : ''}`}
          key={item.id} 
          onClick={() => filterproducts(item.id)}
        >{item.name}</li>
      );
    })}
</ul>



    </div>
    

    
  );
}

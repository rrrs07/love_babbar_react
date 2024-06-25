import React, { useState } from 'react';



import './item.css';




  function Item(props) {
    const itemName = props.name;
  return (
  <>
  <p className="nirma">{itemName}</p>
  {props.children}
  </>
  );
}

export default Item;
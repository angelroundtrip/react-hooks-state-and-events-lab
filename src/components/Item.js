import React, {useState} from "react";

function Item({ name, category }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleCartClick(){
    setIsClicked(!isClicked)
  };

  const color = isClicked ? "magenta" : "yellow";

  return (
    <li className={isClicked ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{ background: color }} className="add" onClick={handleCartClick}>{isClicked ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

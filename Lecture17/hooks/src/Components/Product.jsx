import { useState } from "react";
import style from "./Product.module.css";

function Product() {
  const [price, setPrice] = useState(100);

  const changePrice = () => {
    // price = 200;
    setPrice(200);
    console.log(price);
  };

  return (
    <figure onClick={changePrice} className={style.figure}>
      <img
        className={style.img}
        src='https://images.unsplash.com/photo-1721475246144-98e4f01f3a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
        alt=''
      />
      <h3>Name : ABCD</h3>
      <h3>Price : ${price}</h3>
    </figure>
  );
}

export default Product;

import React from "react";
import Style from "./ItemDetail.module.css";

export const ItemDetail = ({ product }) => {
  return (
    <div className={Style.containerDetail}>
      <div>
        <img src={product.img} alt="" />
      </div>

      <div id="detalle">
        <h2>{product.titulo}</h2>
        <h3>-- {product.autor}--</h3>
        <h5> {product.sinopsis} </h5>
        <h6> Stock: {product.stock}</h6>
      </div>


      
    </div>
  );
};

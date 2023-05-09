import React from "react";
import Style from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";



export const ItemDetail = ({ product, onAdd, cantidadTotal}) => {
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
      
{

product.stock > 0 ? <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal}/>:
<div className={Style.sinStock}><h4>Sin Stock</h4></div>

}
      

     
   
      
    </div>
  );
};

import React, { createContext, useContext, useEffect, useState } from "react";
import {ItemDetail} from "./ItemDetail";
import {products} from "../../productMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {agregarAlCarrito, getQuantityById} = useContext(CartContext)
  
  const {id} = useParams();
  
  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === +id);
    setProduct(encontrado);
  }, [id]);
  
  const onAdd = (cantidad)=>{
    let data = {
      ...product,
      quantity:cantidad
    }
    
     agregarAlCarrito (data)

  }
  
let cantidadTotal = getQuantityById(product.id)
console.log(cantidadTotal)

return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal}/>;
    </div>
  );
};

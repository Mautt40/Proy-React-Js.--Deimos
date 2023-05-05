import React, { createContext, useContext, useEffect, useState } from "react";
import {ItemDetail} from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { database } from "../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore"
import Swal from "sweetalert2";



export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {agregarAlCarrito, getQuantityById} = useContext(CartContext)
  
  const {id} = useParams();
  
  useEffect(() => {
const itemCollection = collection (database, "products")
const refDoc = doc(itemCollection, id)

getDoc (refDoc).then(res => setProduct({
...res.data(),
id:res.id,

}))

.catch(err=> console.log(err))


  }, [id]);
  
  const onAdd = (cantidad)=>{
    let data = {
      ...product,
      quantity:cantidad
    }
    
     agregarAlCarrito (data)
     Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: `${product.titulo}  Agregado al carrito`,
      showConfirmButton: false,
      timer: 1500
    })

  }
  
let cantidadTotal = getQuantityById(product.id)
console.log(cantidadTotal)

return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal}/>;
    </div>
  );
};

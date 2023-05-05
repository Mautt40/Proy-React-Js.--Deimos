import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext);
  
  let total= getTotalPrice()
  const navigate = useNavigate()
  
  const clearCartWithAlert = ()=>{

    Swal.fire({
      title: '¿Desea eliminar todos los elementos del carrito?',
      text: null,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,vaciar'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire(
          'El carrito ha sido vaciado',
          
        )
      }
    })
  }
  
  return (
    <div>
      <Cart clearCartWithAlert ={clearCartWithAlert}navigate={navigate}total={total} cart={cart} deleteProductById={deleteProductById}/>
    </div>
  );
};

export default CartContainer;

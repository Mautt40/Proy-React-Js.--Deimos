import { Button } from "@mui/material";
import React from "react";
import "./Cart.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import { BsCart4 } from "react-icons/bs";

const Cart = ({ cart,clearCartWithAlert, deleteProductById, total, navigate }) => {
  return (
    <div>
      <div className="cart-container">
        
        <div className="container-items">
     
          {cart.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt="" />
                
                <div className="cart-item-info">
                  <h3>{item.titulo}</h3>
                 
               <div className ="cart-price">  
                  <h3>Precio: $ {item.precio},00 </h3>
                </div>
                <div className="item-quantity">
                  <h4>Cantidad:{item.quantity}</h4>
                </div>  
                </div>
                <Button
                  variant="contained" color="error"
                  onClick={() => deleteProductById(item.id)}
                >
                  eliminar
                </Button>
              </div>
            );
          })}
        </div>
        
        
        <div className="cart-info">
          <img src={Logo} alt="logo deimos" /> 
          <h3>Precio total: $ {total},00</h3>
          <h3>Cantidad de productos: {cart.reduce((acc, item) => acc + item.quantity, 0)} </h3>
          <h3>Precio final: $ {total},00 </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button variant="contained" onClick ={()=>navigate("/checkout")}color="warning">Terminar la compra</Button>
              <Button onClick={clearCartWithAlert} variant="contained" color="error">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained" color="warning">Agrega productos</Button>
            </Link>
          )}

          <h6>El total de su compra es $ {total},00</h6>
        </div>
      </div>
    </div>
  );
};

export default Cart;

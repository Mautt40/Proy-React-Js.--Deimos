import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout"
import { useFormik } from "formik";
import * as Yup from "yup" 
import { CartContext } from "../../Context/CartContext";
import { database } from "../../firebaseConfig";
import { addDoc,collection , serverTimestamp, updateDoc, doc } from "firebase/firestore";

export const FormCheckoutContainer = () => {

 const {cart, getTotalPrice,clearCart}= useContext(CartContext)

 const [orderId, setOrderId]= useState(null)

  const checkOutFn = (data) => {
  console.log(data);

  let total= getTotalPrice()


let dataOrder= {


  buyer: data,
  items: cart,
  total: total,
  date: serverTimestamp()
}

const ordersColletion= collection(database, "orders")
addDoc(ordersColletion, dataOrder).then ((res)=> setOrderId (res.id)) 

cart.map(product => {
  updateDoc (doc(database, "products", product.id), {stock:product.stock - product.quantity})
});

clearCart()

};

console.log(orderId)
  const { handleSubmit, handleChange, errors, } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: "",
      
      
    },
    onSubmit: checkOutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es obligatorio"). min( 5 , "El nombre debe poseer al menos 5 caracteres").max(12, "El nombre no puede superar los 12 caeacteres"),
      email:  Yup.string().email("El campo debe ser un email válido").required("Este campo es obligatorio"),
      Phone:  Yup.string().required("Este campo es obligatorio"),
      
    }),

    validateOnChange: false



    });
    


  // /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
  return (
    <div>
{orderId ? (<h1>{orderId}</h1>) : (

<FormCheckout
        
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
    
      />

    )}  
    </div>
  
);
};
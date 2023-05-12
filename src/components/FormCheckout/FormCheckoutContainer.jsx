import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout"
import { useFormik } from "formik";
import * as Yup from "yup" 
import { CartContext } from "../../Context/CartContext";
import { database } from "../../firebaseConfig";
import { addDoc,collection , serverTimestamp, updateDoc, doc } from "firebase/firestore";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from "./FormChekout.module.css" 



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
    
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    
  
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);


  return orderId ? (
    <div>
      <Button onClick={handleOpen} variant="contained" color="warning">Ver ticket</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            </Typography>
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             ¡MUCHAS GRACIAS POR SU COMPRA!------------------
             Su código de compra es // {orderId} //. Conserve el ticket ante cualquier eventualidad.
             </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  ) : (
    <FormCheckout 
    handleChange={handleChange} 
    handleSubmit={handleSubmit} 
    errors={errors} />
  );
};

export default FormCheckoutContainer

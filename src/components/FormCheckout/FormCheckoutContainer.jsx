import React from "react";
import FormCheckout from "./FormCheckout"
import { useFormik } from "formik";
import * as Yup from "yup" 


export const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors, } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmPassword:""
      
    },
    onSubmit: (data) => {
      console.log(data);
    },

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es obligatorio"). min( 5 , "El nombre debe poseer al menos 5 caracteres").max(12, "El nombre no puede superar los 12 caeacteres"),
      email:  Yup.string().email("El campo debe ser un email válido").required("Este campo es obligatorio"),
      password:  Yup.string().required("Este campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {message:"La contraseña debe poseer al menos letra una minúscula, una mayúscula, un caractér especial y un número"}),
      confirmPassword: Yup.string().required("Este campo es obligatorio").oneOf([Yup.ref ("password")],"Las contraseñas no coinciden")     
    }),

    validateOnChange: false



    });
    


  // /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
  return (
    <div>
      <FormCheckout
        
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
    
      />
    </div>
  );
};

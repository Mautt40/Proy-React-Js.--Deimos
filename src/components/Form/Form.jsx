import React, { useState } from "react";

const Form = () => {

  const [userData, setUserData] = useState ({
    nombre:"",
    apellido:"",
  })

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  } 



  console.log(userData)

  const envioDeFormulario = (evento)=>{
  evento.preventDefault ()
  

  }

   return (
    <div>
      <h1>estamos en el formulario</h1>
      
      <form onSubmit={envioDeFormulario}>
        <input 
        type ="text" 
        placeholder="ingresa tu nombre"
        name="nombre"
        value = {userData.nombre} 
        onChange={handleChange} />
        
        <input type ="text" 
        placeholder="ingresa tu apellido"
        name="apellido"
        value = {userData.apellido}
        onChange ={handleChange} />
      

      <button type="submit"> enviar </button>

      <button type="button"> cancelar </button>
      </form>

      
    </div>
  );
};

export default Form;

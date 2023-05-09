import React from "react";
import { Button, Grid, TextField, } from "@mui/material";
import style from "./FormChekout.module.css"  

const FormCheckout = ({handleChange, handleSubmit, errors}) => {


  return (
    <div style={{ paddingTop: "50px" }} className={style.Formulario}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              color="warning"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre? true: false}
              helperText ={errors.nombre}

            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="warning"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email? true: false}
              helperText ={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
              color="warning"
              fullWidth
              name="Phone"
              onChange={handleChange}
              error={errors.password? true: false}
              helperText ={errors.password}
              type='Phone'
              />
          </Grid>
          

          
          
          <Grid xs={6}>
            <Button variant="contained" type="submit" color="error" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;

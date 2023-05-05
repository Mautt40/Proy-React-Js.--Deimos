import React from 'react'
import { Button, Grid, TextField } from '@mui/material'

const FormCheckout = (handleChange, handleSubmit) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action=""onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={6}>
            <Button variant="contained" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default FormCheckout
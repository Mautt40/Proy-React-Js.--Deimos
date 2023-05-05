import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
        backgroundColor: "#f0db71"
      }}
      //noValidate
      autoComplete="off"
    >
      <TextField  
      label="Buscar por Título" color="error"/> 
     
    </Box>
  );
}

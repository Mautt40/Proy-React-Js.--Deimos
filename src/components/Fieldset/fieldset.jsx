import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 5, width: "50ch" },
      }}
      //noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Buscar por Título o Autor"
        variant="outlined"
        color="warning"
      />
    </Box>
  );
}

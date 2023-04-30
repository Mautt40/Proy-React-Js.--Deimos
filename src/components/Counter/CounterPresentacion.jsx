import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import {Button} from "@mui/material"


const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div>
      <div
        style={{
          marginTop: 10,
          marginRight: 30,
          display: "flex",
          gap: "45px",
          justifyContent: "center",
        }}
      >
        <Box 
        mt={5} 
        sx={{ justifyContent: "center" }}
        mb={5}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => onAdd(counter)}
          >
            Agregar al carrito
          </Button>
        </Box>
      </div>

      <Button variant="outlined" color="warning" onClick={sumar}>
        Sumar
      </Button>
      <h2>{counter}  *</h2>
      <Button variant="outlined" color="warning" onClick={restar}>
        Restar
      </Button>
        
    

      <Box mt={18}>
        <Link to="/">
          {" "}
          <Button variant="contained" color="error">
            Regresar
          </Button>{" "}
        </Link>
      </Box>
    </div>
  );
};

export default CounterPresentation;

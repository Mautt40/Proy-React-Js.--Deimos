import "./CartWidget.module.css";
import { BsCart4 } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Cart from "../Carrito/Cart";



const StyledBadge = styled(Badge)(({theme}) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  
const {cart} = useContext(CartContext)
  
  return (
    <Link to ="/cart">
  
      <div className="carrito">
        <StyledBadge badgeContent={cart.length} color="warning">
          <BsCart4 size={40} style={{fill: "white" }} />
        </StyledBadge>
      </div>
    
    </Link>

  );
};

export default CartWidget;

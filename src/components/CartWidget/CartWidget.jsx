import "./CartWidget.module.css";
import { BsCart } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  return (
    <Link to ="/cart">
  
      <div className={styles.carrito}>
        <StyledBadge badgeContent={1} color="warning">
          <BsCart size={40} style={{ fill: "white" }} />
        </StyledBadge>
      </div>
    
    </Link>

  );
};

export default CartWidget;

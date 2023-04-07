import "./CartWidget.module.css";
import { BsCart } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import styles from "./CartWidget.module.css";

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
    <div className={styles.carrito}>
      <StyledBadge badgeContent={1} color="error">
        <BsCart size={40} style={{ fill: 'white' }}/>
      </StyledBadge>
    </div>
  );
};

export default CartWidget;

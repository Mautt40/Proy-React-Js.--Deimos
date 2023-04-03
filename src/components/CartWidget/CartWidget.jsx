import "./CartWidget.module.css";
import { FaCartPlus } from "react-icons/fa";
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
        <FaCartPlus size={45} />
      </StyledBadge>
    </div>
  );
};

export default CartWidget;

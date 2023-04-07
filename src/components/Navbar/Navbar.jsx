import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/Logo.png";
import BasicTextFields from "../Fieldset/Fieldset";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div>
        <img src={Logo} alt="logo deimos" />
      </div>

      <div className="botones">
        <button> Novedades </button>
        <button> Catálogo </button>
        <button> Colecciones</button>
      </div>

      <div className="filtro">
        <BasicTextFields id="texto" />
      </div>

      <CartWidget />
    </div>
  );
};

import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/Logo.png";
import BasicTextFields from "../Fieldset/Fieldset";
import { Outlet,Link,useNavigate } from "react-router-dom";


export const Navbar = () => {
  
const navigate = useNavigate()  
  
  
  
  return (
    <div>
      <div className={styles.containerNavbar}>
        <div>
          <Link to="/">
          <img src={Logo} alt="logo deimos" /> 
          </Link>
        </div>

        <div className="botones">
        <button onClick ={()=> navigate("/")}>Catálogo</button>
        <button onClick ={()=> navigate("/category/novedades")}>Novedades </button>
        <button onClick ={()=> navigate("/category/colecciones")}>Colecciones </button>
        
        </div>

        <div className="filtro">
          <BasicTextFields id="texto" />
        </div>

        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

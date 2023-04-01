
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/Logo.png"
import BasicTextFields from "../Fieldset/fieldset"
export const Navbar = () => {

   return ( 
  
   <div className={styles.containerNavbar}>

       <img src ={Logo} alt="logo deimos"/>

       <BasicTextFields id="texto"/>
      
      <div class="botones">
         
         <button> Novedades </button>
         <button> Catálogo  </button>
         <button> Colecciones</button>
          
          <CartWidget/>
             
       </div>

      
     </div>
  
   );  
};

//import "./Navbar.css"---esto es css puro---
import styles from "./Navbar.module.css"
 
export const Navbar = () => {

   return ( 
   <div className={styles.containerNavbar}>
      <ul>
         <li>productos</li>
         <li>servicios</li>
         <li>contactos</li>
      </ul>

   </div>
   );  
};
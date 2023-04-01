import "./CartWidget.module.css"
import {FaShoppingCart} from 'react-icons/fa';
const CartWidget = () => {
  return (
  
    <div className="carrito">
     
     <FaShoppingCart size={45} /><span>0</span>
     
    </div>
  )
}

export default CartWidget

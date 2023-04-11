import ItemList from "./ItemList";
import { products } from "../../productMock";
import { useEffect, useState } from "react";
import { getMenuItemUnstyledUtilityClass } from "@mui/base";

const ItemListContainer = () => {

const [items, setItems] = useState ([])

useEffect (()=>{const tarea = new Promise ((resolve, reject)=> {

  resolve (products)
  //reject ("se rechazó")
  
  })
  
  tarea
  .then  ((res)=>setItems (res))
  .catch ((err)=>console.log("catch :", err))}, []);

return (
   <div>
  <ItemList items ={items}/>
   </div>
  );
};

export default ItemListContainer;

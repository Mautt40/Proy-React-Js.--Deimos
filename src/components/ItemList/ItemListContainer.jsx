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
  .catch ((err)=>console.log("catch :", err))}, [])





console.log (items)



return (
   <div>
  <ItemList/>
   </div>
  );
};

export default ItemListContainer;

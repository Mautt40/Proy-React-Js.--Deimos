
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { products } from "../../productMock";

const ItemListContainer = () => {
  
const [ items , setItems ] = useState([])

  useEffect( ()=>{

    const tarea = new Promise((resolve, reject) => {
      // reject("se rechazo");
      resolve(products);
    });
  
    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
      
  },[])


  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;


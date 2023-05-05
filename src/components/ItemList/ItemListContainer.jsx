import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {database} from "../../firebaseConfig";
import {HashLoader} from "react-spinners";
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let consulta;

   const itemCollection = collection (database,"products")

    if (categoryName){
    const itemsCollectionFiltered = query (itemCollection, where("category","==",categoryName))
    consulta= itemsCollectionFiltered} 
    else {
      consulta = itemCollection}

  


  getDocs(consulta)
    .then(res=> {
      const products = res.docs.map (product =>{
        return {
          ...product.data(), 
          id: product.id
        }
      })

      setItems(products)

    })

    .catch(err=> console.log (err))

  }, [categoryName]);



if (items.length=== 0) {
 return (
<div style={{display:"flex", justifyContent:"center", marginTop:"50px" }}>
<HashLoader color="#caac09" /> 
</div>)}

  return (
    <div>

  <ItemList items={items} /> 
    </div>
  );
};

export default ItemListContainer;

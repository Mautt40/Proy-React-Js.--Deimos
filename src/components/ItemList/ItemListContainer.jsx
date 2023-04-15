
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isDelete, setIsDelete] = useState (false)
  const [isUpdate, setisUpdate] = useState (false)




  useEffect(() => {
    setIsDelete (false)
    setisUpdate (false)
    
    
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, [isDelete, isUpdate]);


  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
    setIsDelete (true)
  
  
  };

  const updateProduct = (id, data) => {
    axios.patch(`http://localhost:5000/products/${id}`, data)
    setIsDelete (true)




  };

  const createProduct = (data) => {};

  return (
    <div>
      <ItemList
        items={items}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
};

export default ItemListContainer;

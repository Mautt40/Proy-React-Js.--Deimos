import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
  };

  const updateProduct = (id, data) => {};

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

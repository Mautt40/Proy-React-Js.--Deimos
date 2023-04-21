import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { products } from "../../productMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const Filtrado = products.filter(
      (prod) => {
        return prod.category === categoryName;
      }
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? Filtrado : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

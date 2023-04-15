import styles from "./ItemList.module.css";
import ItemCard from "./ItemCard";

const ItemList = ({ items, deleteProduct, updateProduct }) => {
  return (
    <div
      className={styles.containerItems}>
    
      {items.map((item) => {
        return (
          <ItemCard
            item={item}
            key={item.id}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        );
      })}
    </div>
  );
};

export default ItemList;

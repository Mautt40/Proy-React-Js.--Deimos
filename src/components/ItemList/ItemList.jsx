import styles from "./ItemList.module.css";
import ItemCard from "./ItemCard";

const ItemList = ({items}) => {
  return (
    <div
      className={styles.containerItems}>
    
      {items.map((item) => {
        return (
          <ItemCard
            item={item}
            key={item.id}
          
          />
        );
      })}
    </div>
  );
};

export default ItemList;

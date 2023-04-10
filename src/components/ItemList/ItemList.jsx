import styles from "./ItemList.module.css";
const ItemList = ( {saludo} ) => {
  return (
    <div>
        <h1>{saludo}</h1>
        <h2> Aca se van a renderizar los productos </h2>
        </div>
  )
}

export default ItemList
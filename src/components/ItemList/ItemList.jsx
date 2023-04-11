import styles from "./ItemList.module.css";
const ItemList = ({items}) => {
 
  
  return (
    <div style={{display:"flex"}}>
     {
      items.map ((elemento)=>{
        return(
          <div style={{border:"2px solid black",
          width:"200px",
          height: "200px"
          }}>  
        
          <h3> {elemento.titulo} </h3>
          <h4> {elemento.autor} </h4>
        
      </div>
        )
      })
     }   
    
    </div>
  )
}

export default ItemList
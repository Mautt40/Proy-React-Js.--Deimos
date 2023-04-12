import styles from "./ItemList.module.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemList = ({items}) => {
 
  
  return (
    <div style={{
      display:"flex", 
      flexWrap:"wrap",
      border: "2px solid black",
      justifyContent:"space-evenly" }}>
     {
      items.map ((item)=>{
        return(
          <Card sx={{Width:350, height :500}}>
       <CardMedia
        sx={{ height:250,marginTop:2,}}
        image={item.img}
        title={item.titulo} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.titulo}
        </Typography>
        <Typography variant="body2" color="error">
          {item.autor}
        </Typography>
        <Typography variant="body2" color="black">
          {item.genero}
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button  variant= "contained" background ="black" >Ver detalle</Button>
       
      </CardActions>
    </Card>
      
        )
      })
     }   
    
    </div>
  )
}

export default ItemList
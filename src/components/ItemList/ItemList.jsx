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
  
    <div className={styles.containerItems}>
   
     {
      items.map ((item)=>{
        return(
          <Card sx={{minWidth:250,}}>
       <CardMedia
        sx={{ height:350}}
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
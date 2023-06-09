import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom"

const ItemCard = ({item}) => {
  return (
    <div className="containerItems">
         <Card sx={{ minWidth: 300, margin: 0.2,}}>
            <CardMedia
              sx={{ height: 250, margin: 2, backgroundSize: "contain" }}
              image={item.img}
              title={item.titulo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"style={{ textAlign: 'center' }} >
                {item.titulo}
              </Typography>
              <Typography gutterBottom variant="h5" component="div"style={{ textAlign: 'center' }} >
                $ {item.precio},00
              </Typography>
              <Typography variant="h6" color="error" style={{ textAlign: 'center' }}>
                {item.autor}
              </Typography>
              <Typography variant="subtitle1" color="black"style={{ textAlign: 'center' }} >
                {item.genero}
              </Typography>
            </CardContent>
            <CardActions
              style={{   
                display:"flex",
                justifyContent:"center",
                paddingBottom:20,
                flexDirection:"column",
              }}
            >
              <Link to={`/ItemDetail/${item.id}`}>
              <Button variant="contained" id="detalle" color="warning">
                Ver detalle
              </Button>
              </Link>
             
            </CardActions>
          </Card>
      
    </div>
  );

};

export default ItemCard
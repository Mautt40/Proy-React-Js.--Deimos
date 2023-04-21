import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemCard = ({item}) => {
  return (
    <div classname="containerItems">
         <Card sx={{ minWidth: 300, margin: 0.2,}}>
            <CardMedia
              sx={{ height: 250, margin: 1, backgroundSize: "contain" }}
              image={item.img}
              title={item.titulo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.titulo}
              </Typography>
              <Typography variant="h6" color="error">
                {item.autor}
              </Typography>
              <Typography variant="subtitle1" color="black">
                {item.genero}
              </Typography>
            </CardContent>
            <CardActions
              style={{
                justifyContent: "center",
                paddingBottom: 25,
                paddingTop: 10,
                flexDirection: "column",
              }}
            >
              <Button variant="contained" id="detalle" color="warning">
                Ver detalle
              </Button>
             
            </CardActions>
          </Card>
      
    </div>
  );

};

export default ItemCard
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { SupaBase } from "./createClient";

const Fruits = ({ handleClick }) => {

  const [color, setColor] = React.useState({});
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const { data : Fruits, error } = await SupaBase.from("Fruits").select();
    if (error) {
      console.log(error);
    } else {
      setData(Fruits);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth={false} maxHeight={false}>
      <Typography mt={8} variant="h1" component="h2">
        Fruits
      </Typography>
      <Box
        sx={{
          maxwidth: "345px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((ele) => {
          return (
            <Card
              key={ele.id}
              sx={{
                maxWidth: 345,
                marginBlock: 2,
                boxShadow: 20,
                marginInline: 2,
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={ele.img_url}
                alt={ele.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {ele.name}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {ele.description}
                </Typography>
                <Typography variant="h5" component="h2">
                  ₹{ele.price}
                  <span style={{ fontSize: '15px' }}> Per Kg</span>
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  size="large"
                  onClick={() => {
                    handleClick(ele)
                    Swal.fire({
                      icon: 'success',
                      title: 'Item added to cart :) ',
                      timer: '2000',
                    })
                  }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <IconButton
                  size="large"
                  style={{ color: color[ele.id] }}
                  handleClick={() => {
                    setColor((prevColor) => ({
                      ...prevColor,
                      [ele.id]: 'red',
                    }))
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <Typography style={{ marginLeft: 110 }}>
                  Available Stock {ele.stock} Kg
                </Typography>
              </CardActions>
            </Card>
          )
        })}
      </Box>
    </Container>
  );
};

Fruits.propTypes = {
  handleClick: PropTypes.func,
};
export default Fruits;
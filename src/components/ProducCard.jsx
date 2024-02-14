import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { AddCard, AddShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductCard(product) {
  const { title, price, description, id, images } = product;
  const dispatch = useDispatch();

  const hendelAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={hendelAdd} color="primary">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

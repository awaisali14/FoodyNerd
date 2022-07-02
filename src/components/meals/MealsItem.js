import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { useContext } from "react";
//user impots
import { componentStyles } from "../../mui-styles/component-styles";
import cartContext from "../../store/cart-context";
import itemsContext from "../../store/items-context";

const MealsItem = (props) => {
  const classes = componentStyles();
  const ctx = useContext(cartContext);
  const itemsCtx = useContext(itemsContext);

  const additemsToCart = () => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    });
  };
  const removeItemFormList = () => {
    itemsCtx.removeItem(props.id);
  };
  return (
    <Card
      style={{ borderRadius: "20px", marginTop: "4rem" }}
      className={classes.mealsItemCard}
    >
      <CardActionArea>
        <CardMedia image={props.image} className={classes.cardImage} />
        <CardContent>
          <p className="mealsItem-heading1">{props.name}</p>
          <div className="cardContent-div">
            <p className="mealsItem-heading2">{props.description}</p>
            <p className="mealsItem-heading3">${props.price}</p>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {itemsCtx.switchPage ? (
          <Button
            size="small"
            className={classes.mealsItemButton}
            onClick={additemsToCart}
          >
            Add to Cart
          </Button>
        ) : (
          <div>
            <Button
              size="small"
              className={classes.mealsItemButton}
              onClick={removeItemFormList}
            >
              Delete
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  );
};

export default MealsItem;

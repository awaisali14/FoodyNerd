import { AppBar, Toolbar } from "@material-ui/core";
import { useContext } from "react";
//user imports
import CartButtonIcon from "../assests/svgComponents/CartButtonIcon";
import cartContext from "../store/cart-context";
const Appbar = (props) => {
  const ctx = useContext(cartContext);
  const totalItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <AppBar elevation={0} color="transparent" position="fixed">
      <Toolbar>
        <button className="appbar-button" onClick={props.modleHandler}>
          <span className="appbar-icon">
            <CartButtonIcon />
          </span>
          <span className="appbar-heading">Your Cart</span>
          <span className="appbar-badge">{totalItems}</span>
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

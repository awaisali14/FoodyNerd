import { useContext } from "react";
//user imports
import cartContext from "../store/cart-context";
import Modal from "./ui/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  //   const Cart = [{ id: "e1", name: "Sushi", amount: 2, price: 20.0 }];
  const ctx = useContext(cartContext);
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  const addItemHandler = (item) => {
    ctx.addItem(item);
  };
  const CartItems = (
    <ul className="cart-items">
      {ctx.items.map((item) => {
        const p = item.price;
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, {
              id: item.id,
              name: item.name,
              price: p,
              amount: 1,
            })}
          />
        );
        // return <div><li>{item.name}</li><li>{item.id}</li></div>;
      })}
    </ul>
  );
  const hasItems = ctx.items.length > 0;
  const totalamount = `$${ctx.totalAmount.toFixed(2)}`;
  return (
    <Modal>
      {CartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.hidemodleHandler}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

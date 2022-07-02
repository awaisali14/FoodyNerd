import { useState } from "react";
//user imports
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Meals from "../components/meals/Meals";
import Appbar from "../components/Appbar";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart";

const Users = () => {
  const [Isvalid, setIsVaild] = useState(false);
  const showModalHandler = () => {
    setIsVaild(true);
  };
  const hideModalHandler = () => {
    setIsVaild(false);
  };
  return (
    <CartProvider>
      <Appbar modleHandler={showModalHandler} />
      {Isvalid && <Cart hidemodleHandler={hideModalHandler} />}
      <Banner />
      <section>
        <AboutUs />
        <div style={{ marginTop: "15rem" }} className="top-margin">
          <Meals />
        </div>
      </section>
    </CartProvider>
  );
};

export default Users;

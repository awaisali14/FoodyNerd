import { Fragment, useContext } from "react";
//user imports
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import itemsContext from "./store/items-context";

function App() {
  const itemsCtx = useContext(itemsContext);
  return (
    <Fragment>
      {itemsCtx.switchPage ? <Users /> : <Admin />}
      <Footer />
    </Fragment>
  );
}

export default App;

import { Box, Button } from "@material-ui/core";
import { useState } from "react";
//user imports
import AdminForm from "./AdminForm";
import { componentStyles } from "../../mui-styles/component-styles";
import Meals from "../meals/Meals";
const Main = () => {
  const classes = componentStyles();
  const [Isvalid, setIsVaild] = useState(false);
  const showAddItemForm = () => setIsVaild(true);
  const hideAddItemForm = () => setIsVaild(false);

  return (
    <Box style={{ flex: 4 }}>
      {Isvalid ? (
        <AdminForm hideAddItemForm={hideAddItemForm} />
      ) : (
        <Button
          variant="contained"
          onClick={showAddItemForm}
          className={classes.addItemsButton}
        >
          Add Food Item
        </Button>
      )}
      <Meals />
    </Box>
  );
};

export default Main;

import { Fragment, useState, useContext, useEffect } from "react";
import { Box, Button, TextField } from "@material-ui/core";
// user imports
import { componentStyles } from "../../mui-styles/component-styles";
import itemsContext from "../../store/items-context";

const AdminForm = (props) => {
  const classes = componentStyles();
  const itemsCtx = useContext(itemsContext);
  const [itemImage, setItemImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  // const [itemData,setItemData] = useState({name:"",description:"",price:"",image:null});
  // for form validation
  const [itemNameError, setItemNameError] = useState(false);
  const [itemDescriptionError, setItemDescriptionError] = useState(false);
  const [itemPriceError, setItemPriceError] = useState(false);
  const [buttonState, setbuttonState] = useState(true);

  useEffect(() => {
    if (itemName.trim().length > 8) {
      setItemNameError(true);
    } else {
      setItemNameError(false);
    }
  }, [itemName]);

  useEffect(() => {
    if (itemDescription.trim().length > 15) {
      setItemDescriptionError(true);
    } else {
      setItemDescriptionError(false);
    }
  }, [itemDescription]);

  useEffect(() => {
    if (itemPrice.length > 0) {
      if (
        !isNaN(itemPrice) &&
        itemPrice.trim().toString().indexOf(".") !== -1
      ) {
        setItemPriceError(false);
      } else {
        setItemPriceError(true);
      }
    } else {
      setItemPriceError(false);
    }
  }, [itemPrice]);
  useEffect(() => {
    if (itemNameError || itemDescriptionError || itemPriceError) {
      setbuttonState(false);
    } else {
      setbuttonState(true);
    }
  }, [itemNameError, itemDescriptionError, itemPriceError]);

  const submitHandler = (event) => {
    event.preventDefault();
    const itemData = {
      id: Math.random(),
      name: itemName,
      description: itemDescription,
      price: +itemPrice,
      image: URL.createObjectURL(itemImage),
    };
    itemsCtx.addNewItem(itemData);
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <Box className={classes.textFieldBox}>
          {itemNameError && <p>Must be less than 8 characters</p>}
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={classes.textField}
            style={{ marginTop: "1rem" }}
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </Box>
        <Box className={classes.textFieldBox}>
          {itemDescriptionError && <p>Must be less than 15 characters</p>}
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            className={classes.textField}
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </Box>
        <Box className={classes.textFieldBox}>
          {itemPriceError && <p>Must be float</p>}
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            className={classes.textField}
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </Box>
        <Box className={classes.uploadFileBox}>
          <input
            type="file"
            name="myImage"
            onChange={(e) => setItemImage(e.target.files[0])}
            required
          />
        </Box>
        <Box className={classes.textFieldBox}>
          <Button
            variant="outlined"
            className={classes.formButton}
            type="submit"
            disabled={!buttonState}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            className={classes.formButton}
            onClick={props.hideAddItemForm}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default AdminForm;

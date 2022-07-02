import { makeStyles } from "@material-ui/core/styles";

export const componentStyles = makeStyles((theme) => ({
  //appbar
  appbarButton: {
    position: "relative",
    left: "80%",
    padding: "1rem 2rem",
  },

  // MealsItem
  mealsItemCard: {
    height: "auto",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // [theme.breakpoints.down("md")]: {
    //   width: "85%",
    //   marginTop: "30rem",
    // },
  },
  cardImage: {
    height: "240px",
  },
  mealsItemButton: {
    fontSize: "1.4rem",
  },
  textFieldBox: {
    textAlign: "center",
    marginTop: "1rem",
  },
  uploadFileBox: {
    marginLeft: "1.6rem",
    marginTop: "1rem",
  },
  textField: {
    background: "#FFFFFF",
    borderRadius: "7px",
    width: "90%",
    fontWeight: "500",
  },
  formButton: {
    width: "43%",
    margin: "0rem 0.2rem 1rem 0.2rem",
    fontSize: "1.2rem",
    backgroundColor: "#000",
    color: "#FFF",
    "&:disabled": {
      color: "#000",
      backgroundColor: "#F7F7F7",
    },
  },
  addItemsButton: {
    width: "16rem",
    margin: "1rem 1rem",
    fontSize: "1.2rem",
    backgroundColor: "#000",
    color: "#FFF",
  },
  fotterButton: {
    width: "12rem",
    fontSize: "1.3rem",
    backgroundColor: "#FFFFFF",
    fontWeight: "500",
    color: "#000",
  },
}));

import { Grid, Button } from "@material-ui/core";
import { useContext } from "react";
//user imports
import footerLogo from "../assests/images/logo-white.png";
import itemsContext from "../store/items-context";
import { componentStyles } from "../mui-styles/component-styles";
const Footer = () => {
  const itemsCtx = useContext(itemsContext);
  const classes = componentStyles();
  console.log(itemsCtx.switchPage);
  return (
    <Grid
      container
      spacing={0}
      style={{ backgroundColor: "#000", padding: "5rem 0" }}
    >
      <Grid item xs={12}>
        <div className="footer-img">
          <img src={footerLogo} alt="footerlogo" />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            className={classes.fotterButton}
            onClick={itemsCtx.tooglePage}
          >
            {itemsCtx.switchPage ? "Admin" : "User"}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;

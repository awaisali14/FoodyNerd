import { Grid } from "@material-ui/core";
import { Fragment } from "react";
//user imports
import CustomButton from "./ui/CustomButton";
import img1 from "../assests/images/food_1.jpg";
import img2 from "../assests/images/food_2.jpg";
import img3 from "../assests/images/food_3.jpg";

const AboutUs = () => {
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>
            <p className="about-heading1">Delicious food for people</p>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        style={{ padding: "0 4rem", marginTop: "4rem", marginBottom: "4rem" }}
      >
        <Grid item xs={12} md={6} style={{ marginBottom: "3rem" }}>
          <h3 className="about-heading2">You're going to fall in love</h3>
          <p className="about-heading3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <h3 className="about-heading2">Food that you never had before</h3>
          <p className="about-heading3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <CustomButton cssClass="btn-text">Learn more &rarr;</CustomButton>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginBottom: "6rem" }}>
          <div className="composition">
            <img
              src={img1}
              alt="photo1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={img2}
              alt="photo2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={img3}
              alt="photo3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutUs;

import { useContext } from "react";
import { Grid } from "@material-ui/core";

//user imports
import MealsItem from "./MealsItem";
import itemsContext from "../../store/items-context";

const Meals = () => {
  const itemsCtx = useContext(itemsContext);

  const displayMeals = itemsCtx.itemsData.map((el) => (
    <Grid item xs={12} sm={6} md={4} key={el.id}>
      <MealsItem
        image={el.image}
        name={el.name}
        description={el.description}
        price={el.price}
        id={el.id}
      />
    </Grid>
  ));
  return (
    <Grid container spacing={0} style={{ padding: "0rem 8rem 5rem 8rem" }}>
      <Grid item xs={12}>
        <div style={{ textAlign: "center" }}>
          <p className="about-heading1">Available Foods</p>
        </div>
      </Grid>
      {displayMeals}
    </Grid>
  );
};

export default Meals;

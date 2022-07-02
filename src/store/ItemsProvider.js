import { useState } from "react";
//user imports
import itemsContext from "./items-context";
import image1 from "../assests/images/food_1.jpg";
import image2 from "../assests/images/food_2.jpg";
import image3 from "../assests/images/food_3.jpg";
import image4 from "../assests/images/food_4.jpg";
import image5 from "../assests/images/food_5.jpg";
import image6 from "../assests/images/food_6.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    image: image1,
    name: "Fires",
    description: "Made from Potatoes",
    price: 22.99,
  },
  {
    id: "m2",
    image: image2,
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    image: image3,
    name: "Soup",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    image: image4,
    name: "Pizza",
    description: "A delicious one",
    price: 22.99,
  },
  {
    id: "m5",
    image: image5,
    name: "Burger",
    description: "Made from chicken!",
    price: 16.5,
  },
  {
    id: "m6",
    image: image6,
    name: "Long Burger",
    description: "Includes fresh vegies",
    price: 12.99,
  },
];

const ItemsProvider = (props) => {
  const [itemsData, setItemsData] = useState(DUMMY_MEALS);
  const [switchPage, setSwitchPage] = useState(true);

  const tooglePage = () => setSwitchPage((prevState) => !prevState);

  const addNewItem = (item) => {
    setItemsData((prevData) => {
      const updatedData = [item, ...prevData];
      console.log(updatedData);
      return updatedData;
    });
  };

  const removeItem = (id) => {
    setItemsData((prevData) => prevData.filter((el) => el.id !== id));
  };

  const itemsValue = {
    itemsData,
    switchPage,
    addNewItem,
    removeItem,
    tooglePage,
  };

  return (
    <itemsContext.Provider value={itemsValue}>
      {props.children}
    </itemsContext.Provider>
  );
};

export default ItemsProvider;

import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import menuImg from "../assets/menu/banner3.jpg";
// import soupImg from "../assets/menu/soup-bg.jpg";
// import saladImg from "../assets/menu/salad-bg.jpg";
// import pizzaImg from "../assets/menu/pizza-bg.jpg";
// import dessertImg from "../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Meetup | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;

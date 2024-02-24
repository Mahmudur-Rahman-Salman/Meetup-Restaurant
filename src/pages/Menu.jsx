import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import useMenu from "../hooks/useMenu";
import Menucategory from "./Shared/Menucategory";

import soupImg from "../assets/menu/soup-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import SectionTitle from "./Shared/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Meetup | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>

      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

      {/* offered menu items */}
      <Menucategory items={offered}></Menucategory>
      <Menucategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></Menucategory>
      <Menucategory items={soup} title={"soup"} img={soupImg}></Menucategory>
      <Menucategory items={salad} title={"salad"} img={saladImg}></Menucategory>
      <Menucategory items={pizza} title={"pizza"} img={pizzaImg}></Menucategory>
    </div>
  );
};

export default Menu;

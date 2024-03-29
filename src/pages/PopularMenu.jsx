import SectionTitle from "./Shared/SectionTitle";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 m-5">
        {popularMenu.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 mx-5">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;

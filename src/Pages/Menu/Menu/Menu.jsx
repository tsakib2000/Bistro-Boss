import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from  '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from  '../../../assets/menu/pizza-bg.jpg'
import soupBg from  '../../../assets/menu/soup-bg.jpg'
import saladBg from  '../../../assets/menu/salad-bg.jpg'
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro-Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />

      <SectionTitle subHeading={"Don'nt Miss"} heading={"today's offer"} />
      {/* offered menu items  */}
      <MenuCategory items={offered} />
 {/* Dessert items  */}
 <MenuCategory  items={dessert} title={'dessert'} coverImg={dessertBg}/>
 {/* Pizza items  */}
 <MenuCategory  items={pizza} title={'pizza'} coverImg={pizzaBg}/>
 {/* soup items  */}
 <MenuCategory  items={soup} title={'soup'} coverImg={soupBg}/>
 {/* soup items  */}
 <MenuCategory  items={salad} title={'salad'} coverImg={saladBg}/>

    </div>
  );
};

export default Menu;

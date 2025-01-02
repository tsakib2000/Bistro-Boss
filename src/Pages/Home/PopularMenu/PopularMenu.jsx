
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu]=useMenu();
    const popular =menu.filter(item => item.category == 'popular')
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item => item.category == 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <div>
            <SectionTitle 
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            />
            <div className="grid md:grid-cols-2 gap-4 p-8">
                {
                    popular?.map(item=> <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../../../assets/menu/banner3.jpeg'
import pizzaImg from '../../../../../assets/menu/suzuki (1).jpeg'
import saladImg from '../../../../../assets/menu/Apache.jpeg'
import soupImg from '../../../../../assets/menu/FZ.jpeg'
import dessertImg from '../../../../../assets/menu/R-15.jpeg'
import useMenu from '../../../../../hooks/useMenu';
import SectionTitle from '../../../../../componets/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>YAMAHA | Menu</title>               
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Tody's Offer">

            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"suzuki"} img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"Apache"} Img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"FZ"} Img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"R-15"} Img={soupImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;
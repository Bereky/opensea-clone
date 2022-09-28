import './index.css'
import NavBrand from './NavBrand';
import NavItems from './NavItems';
import NavSearch from './NavSearch';
import NavSide from './NavSide';

const Nav = () => {
    return ( 
        <nav className="navbar">
            <NavBrand />
            <NavSearch />
            <NavItems />
            <NavSide />
        </nav>
     );
}
 
export default Nav;
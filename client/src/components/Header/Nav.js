import './index.css'
import NavBrand from './NavBrand';
import NavItems from './NavItems';
import NavSearch from './NavSearch';

const Nav = () => {
    return ( 
        <nav className="navbar">
            <NavBrand />
            <NavSearch />
            <NavItems />
        </nav>
     );
}
 
export default Nav;
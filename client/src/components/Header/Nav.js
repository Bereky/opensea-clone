import './index.css'
import NavBrand from './NavBrand';
import NavItems from './NavItems';
import NavSearch from './NavSearch';
import NavSide from './NavSide';

import { SidebarContext } from '../../Context/SidebarContext';

import { useContext } from 'react';

const Nav = () => {
    const sidebarContext = useContext(SidebarContext)

    return ( 
        <nav className="navbar">
            <NavBrand />
            <NavSearch />
            <NavItems />
            { sidebarContext.sideBarIsOpen && <NavSide /> }
        </nav>
     );
}
 
export default Nav;
import './index.css'
import NavBrand from './NavBrand';
import NavItems from './NavItems';
import NavSearch from './NavSearch';
import NavSide from './NavSide';

import { SearchProvider } from '../../Context/SearchProvider';
import { SidebarContext } from '../../Context/SidebarContext';

import { useContext } from 'react';

const Nav = () => {
    const sidebarContext = useContext(SidebarContext)

    return ( 
        <nav className="navbar">
            <SearchProvider>
                <NavBrand />
                <NavSearch />
                <NavItems />
                { sidebarContext.sideBarIsOpen && <NavSide /> }
            </SearchProvider>
        </nav>
     );
}
 
export default Nav;
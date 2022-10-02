import './index.css'
import NavBrand from './NavBrand';
import NavItems from './NavItems';
import NavSearch from './NavSearch';
import NavSide from './NavSide';

import { SearchProvider } from '../../Context/SearchProvider';
import { SearchContext } from '../../Context/SearchContext';
import { useContext } from 'react';

const Nav = () => {
    const searchContext = useContext(SearchContext)

    return ( 
        <nav className="navbar">
            <SearchProvider>
                <NavBrand />
                <NavSearch />
                <NavItems />
                { searchContext.searchBarIsOpen && <NavSide /> }
            </SearchProvider>
        </nav>
     );
}
 
export default Nav;
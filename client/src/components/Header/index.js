import './index.css'
import Nav from './Nav';

import { SidebarProvider } from '../../Context/SidebarProvider';
import { SearchProvider } from '../../Context/SearchProvider';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header-container">
                <SidebarProvider>
                    <SearchProvider>
                        <Nav />
                    </SearchProvider>
                </SidebarProvider>
            </div>
        </div>
     );
}
 
export default Header;
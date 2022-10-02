import './index.css'
import Nav from './Nav';

import { SidebarProvider } from '../../Context/SidebarProvider';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header-container">
                <SidebarProvider>
                    <Nav />
                </SidebarProvider>
            </div>
        </div>
     );
}
 
export default Header;
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';

const NavItems = () => {
    return ( 
        <ul className="navbar-items">
            <div className="nav-items-container-xl">
                <div className="nav-items-container-xl-child">
                    <li className="nav-xl-item">
                        <a href="#" className="nav-item-xl-link">Explore</a>
                    </li>
                    <li className="nav-xl-item">
                        <a href="#" className="nav-item-xl-link">Stats</a>
                    </li>
                    <li className="nav-xl-item">
                        <a href="#" className="nav-item-xl-link">Resources</a>
                    </li>
                    <li className="nav-xl-item">
                        <a href="#" className="nav-item-xl-link">Create</a>
                    </li>
                </div>
            </div>
            <div className="nav-actions-container-lg">
                <div className="nav-actions-container-lg-child">
                    <div className="nav-actions-account">
                        <li className="nav-actions-account-item">
                            <a href="#" className="nav-actions-account-link">
                                <AccountCircleIcon fontSize='large'/>
                            </a>
                        </li>
                    </div>
                    <div className="nav-actions-wallet">
                        <li className="nav-actions-wallet-item">
                            <div className="wallet-button-container">
                                <button className="wallet-button">
                                    <AccountBalanceWallet fontSize='large'/>
                                </button>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
            <div className="nav-items-container-xl-lg">
                <ul className="nav-items-xl-lg">
                    <div className="nav-items-humberger-lg-xl">
                        <li className="nav-items-humberger-lg-xl-item">
                            <div className="humberger-lg-xl-button-container">
                                <button className="humberger-lg-xl-button">
                                    <MenuIcon fontSize='large'/>
                                </button>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </ul>
     );
}
 
export default NavItems;
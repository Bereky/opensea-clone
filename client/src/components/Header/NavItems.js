import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

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

        </ul>
     );
}
 
export default NavItems;
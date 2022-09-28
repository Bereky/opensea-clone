
import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NavSide = () => {
    return (
        <aside className="nav-mobile-container">
            <div className="nav-mobile-full-width">
                <div className="nav-mobile">
                    <ul className="nav-mobile-menu">
                        <li className="nav-mobile-menu-item">
                            <div className="menu-item-container">
                                <button className="menu-item-button">
                                <div className="menu-item-icon-main">
                                    <ExploreIcon fontSize="large" />
                                </div>
                                    Explore
                                <div className="menu-item-icon-end">
                                    <KeyboardArrowRightIcon fontSize="large" />
                                </div>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default NavSide

import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

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

                        <li className="nav-mobile-menu-item">
                            <div className="menu-item-container">
                                <button className="menu-item-button">
                                <div className="menu-item-icon-main">
                                    <LeaderboardIcon fontSize="large" />
                                </div>
                                    Stats
                                <div className="menu-item-icon-end">
                                    <KeyboardArrowRightIcon fontSize="large" />
                                </div>
                                </button>
                            </div>
                        </li>

                        <li className="nav-mobile-menu-item">
                            <div className="menu-item-container">
                                <button className="menu-item-button">
                                <div className="menu-item-icon-main">
                                    <LibraryBooksIcon fontSize="large" />
                                </div>
                                    Resources
                                <div className="menu-item-icon-end">
                                    <KeyboardArrowRightIcon fontSize="large" />
                                </div>
                                </button>
                            </div>
                        </li>

                        <li className="nav-mobile-menu-item">
                            <div className="menu-item-container">
                                <button className="menu-item-button">
                                <div className="menu-item-icon-main">
                                    <LanguageIcon fontSize="large" />
                                </div>
                                    Language
                                <div className="menu-item-icon-end">
                                    <KeyboardArrowRightIcon fontSize="large" />
                                </div>
                                </button>
                            </div>
                        </li>

                        <li className="nav-mobile-menu-item">
                            <div className="menu-item-container">
                                <button className="menu-item-button">
                                <div className="menu-item-icon-main">
                                    <Brightness2Icon fontSize="large" />
                                </div>
                                    Night Mode
                                <div className="menu-item-icon-end">
                                    <ToggleOffIcon fontSize="large" />
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
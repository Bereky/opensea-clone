
import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

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

                        <li className="nav-mobile-menu-item-button">
                            <div className="menu-item-container">
                                <button className="menu-item-button-connect-wallet">
                                    Connect Wallet
                                </button>
                            </div>
                        </li>

                        
                    </ul>
                    <div className="nav-item-socials">
                        <div href="#" className="item-socials-container">
                            <a href="#" className="list-item-social-icon">
                                <div className="icon-con">
                                    <TwitterIcon />
                                </div>
                            </a>
                            <a href="#" className="list-item-social-icon">
                                <div className="icon-con">
                                    <InstagramIcon />
                                </div>
                            </a>
                            <a href="#" className="list-item-social-icon">
                                <div className="icon-con">
                                    <TwitterIcon />
                                </div>
                            </a>
                            <a href="#" className="list-item-social-icon">
                                <div className="icon-con">
                                    <RedditIcon />
                                </div>
                            </a>
                            <a href="#" className="list-item-social-icon">
                                <div className="icon-con">
                                    <YouTubeIcon />
                                </div>
                            </a>
                            <a href="#" className="list-item-social-icon">
                                <div className="icon-con">
                                    <TwitterIcon />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default NavSide
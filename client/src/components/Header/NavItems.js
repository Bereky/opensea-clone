import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useContext, useReducer } from 'react';
import { SearchContext } from '../../Context/SearchContext';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GridOnIcon from '@mui/icons-material/GridOn';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness2Icon from '@mui/icons-material/Brightness2';

const itemStates = [
    {
        name: "explore",
        hovered: false
    },
    {
        name: "stats",
        hovered: false
    },
    {
        name: "resources",
        hovered: false
    },
    {
        name: "account",
        hovered: false
    }
]

const NavItems = () => {
    /* Small screen search toggle */
    const searchContext = useContext(SearchContext)

    const hoverReducer = (state, action) => {
        switch (action.itemState) {
            case 'MOUSE_ENTER':
                return state.map((item) => {
                        if(item.name === action.name){
                            return { ...item, hovered: true }
                        }
                        else {
                            return item
                        }
                })
            case 'MOUSE_LEAVE':
                return state.map((item) => {
                    if(item.name === action.name){
                        return { ...item, hovered: false }
                    }
                    else {
                        return item
                    }
                })
            default: 
                return state
        }
    }



    const [ itemState, dispatchHover ] = useReducer(hoverReducer, itemStates)

    const handelOpen = () => {
        searchContext.setSearchBarIsOpen(true)
    }


    return ( 
        <ul className="navbar-items">
            <div className="nav-items-container-xl">
                <div className="nav-items-container-xl-child">
                    <li className="nav-xl-item nav-item-explore" onMouseEnter={ () => dispatchHover({ itemState: "MOUSE_ENTER", name: "explore" }) } onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "explore" })}>
                        <a href="#" className="nav-item-xl-link">Explore</a>
                    </li>
                    <li className="nav-xl-item nav-item-stats" onMouseEnter={ () => dispatchHover({ itemState: "MOUSE_ENTER", name: "stats" }) } onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "stats" })}>
                        <a href="#" className="nav-item-xl-link">Stats</a>
                    </li>
                    <li className="nav-xl-item nav-item-resource" onMouseEnter={ () => dispatchHover({ itemState: "MOUSE_ENTER", name: "resources" }) } onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "resources" })}>
                        <a href="#" className="nav-item-xl-link">Resources</a>
                    </li>
                    <li className="nav-xl-item nav-item-create">
                        <a href="#" className="nav-item-xl-link">Create</a>
                    </li>

                     {/* Drop down */}
                     { itemState[0].hovered &&
                        
                     <div className="explore-drop-down-root" onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "explore" })} onMouseEnter={ () => dispatchHover({ itemState: "MOUSE_ENTER", name: "explore" }) }>
                        <div className="explore-dropdown">
                            <div className="explore-dropdown-content">
                                <ul className="dropdown-list">
                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">All NFTs</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/solana-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Solana NFTs</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/art-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Art</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/collectibles-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Collectibles</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/domain-names-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Domain Names</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/music-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Music</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/photography-category-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Photography</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/sports-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Sports</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/trading-cards-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Trading Cards</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/utility-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Utility</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="dropdown-list-item">
                                        <a href="#" className="dropdown-list-item-link">
                                            <div className="list-item-icon">
                                                <div className="icon-con">
                                                    <img src="https://opensea.io/static/images/icons/virtual-worlds-light.svg" alt="all-nft" className="icon-image" />
                                                </div>
                                            </div>
                                            <div className="list-item-name">
                                                <span className="item-name">Virtual Worlds</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    }

                    {/* STATS DROPDOWN ITEMS */}

                     { itemState[1].hovered &&
                        <div className="stats-drop-down-root" onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "stats" })} onMouseEnter={() => dispatchHover({ itemState: "MOUSE_ENTER", name: "stats" })}>
                            <div className="explore-dropdown">
                                <div className="explore-dropdown-content">
                                    <ul className="dropdown-list">
                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                <div className="list-item-name">
                                                    <span className="item-name">Rankings</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Activity</span>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    }

                    {/* Resources Dropdown  */}
                    { itemState[2].hovered &&
                        <div className="resources-drop-down-root" onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "resources" })} onMouseEnter={() => dispatchHover({ itemState: "MOUSE_ENTER", name: "resources" })}>
                            <div className="explore-dropdown">
                                <div className="explore-dropdown-content">
                                    <ul className="dropdown-list">
                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Learn</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Help Center</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Platform Status</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                               
                                                <div className="list-item-name">
                                                    <span className="item-name">Partner</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Taxes</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Blog</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Docs</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <a href="#" className="dropdown-list-item-link">
                                                
                                                <div className="list-item-name">
                                                    <span className="item-name">Newsletter</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="dropdown-list-item">
                                            <div href="#" className="dropdown-list-item-socials">
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
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    }

                    {/* Profile dropdown */}

                    

                </div>
            </div>
            { itemState[3].hovered &&
                        
                        <div className="account-drop-down-root" onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "account" })} onMouseEnter={ () => dispatchHover({ itemState: "MOUSE_ENTER", name: "account" }) }>
                           <div className="explore-dropdown">
                               <div className="explore-dropdown-content">
                                   <ul className="dropdown-list">
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                       <PersonIcon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">Profile</span>
                                               </div>
                                           </a>
                                       </li>
   
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                        <FavoriteBorderIcon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">Favorites</span>
                                               </div>
                                           </a>
                                       </li>
   
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                       <VisibilityIcon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">Watchlist</span>
                                               </div>
                                           </a>
                                       </li>
   
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                    <GridOnIcon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">My Collections</span>
                                               </div>
                                           </a>
                                       </li>
   
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                        <SettingsIcon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">Setting</span>
                                               </div>
                                           </a>
                                       </li>
   
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                        <LanguageIcon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">Language</span>
                                               </div>
                                           </a>
                                       </li>
   
                                       <li className="dropdown-list-item">
                                           <a href="#" className="dropdown-list-item-link">
                                               <div className="list-item-icon">
                                                   <div className="icon-con">
                                                        <Brightness2Icon />
                                                   </div>
                                               </div>
                                               <div className="list-item-name">
                                                   <span className="item-name">Night Mode</span>
                                               </div>
                                           </a>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       }
            <div className="nav-actions-container-lg">
                <div className="nav-actions-container-lg-child">
                    <div className="nav-actions-account" onMouseEnter={ () => dispatchHover({ itemState: "MOUSE_ENTER", name: "account" }) } onMouseLeave={ () => dispatchHover({ itemState: "MOUSE_LEAVE", name: "account" })}>
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

            {/* Small screen search bar */}
            
            <div className="nav-items-container-sm-lg">
                <ul className="nav-items-sm-lg">
                    <div className="nav-items-humberger-sm-lg">
                        <li className="nav-items-humberger-sm-lg-item">
                            <div className="humberger-sm-lg-button-container">
                                <button className="humberger-sm-lg-button">
                                    <SearchIcon fontSize='large' onClick={handelOpen}/>
                                </button>
                            </div>
                        </li>
                    </div>
                </ul>
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
           
           {/* Hover menu elements */}

           
        </ul>
     );
}
 
export default NavItems;
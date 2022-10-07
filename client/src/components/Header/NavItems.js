import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useReducer } from 'react';
import { SearchContext } from '../../Context/SearchContext';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Dropdowns } from './Dropdowns';
import { NavDropdownStats, NavDropdownExplore, NavDropDownResources, NavDropdownAccount }  from './NavDropdownItem';
import { SidebarContext } from '../../Context/SidebarContext';

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
    const sidebarContext = useContext(SidebarContext)

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

    const handleOpen = () => {
        searchContext.setSearchBarIsOpen(true)
    }

    const handleSideBar = () => {
        sidebarContext.setSideBarIsOpen(true)
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
                                    {Dropdowns.explore.map((item) => <NavDropdownExplore listName={item.name} imageSource={item.iconsrc} altText={item.altText} />)}
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
                                        {Dropdowns.stats.map((item) => <NavDropdownStats name={item.name} />)}
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
                                        
                                    {Dropdowns.resources.map((item) => <NavDropDownResources name={item.name} />)}


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

                        {Dropdowns.account.map((item) => <NavDropdownAccount name={item.name} icon={item.icon} />)}
                            
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
                                    <SearchIcon fontSize='large' onClick={handleOpen}/>
                                </button>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>


            <div className="nav-items-container-xl-lg">
                <ul className="nav-items-xl-lg">
                    <div className="nav-items-humberger-lg-xl">
                        <li className="nav-items-humberger-lg-xl-item" onClick={handleSideBar}>
                            <div className="humberger-lg-xl-button-container">
                                <button className="humberger-lg-xl-button">
                                    {!sidebarContext.sideBarIsOpen? <MenuIcon fontSize='large'/> : <CloseIcon fontSize='large'/>}

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
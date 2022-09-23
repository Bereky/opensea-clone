import {useContext, Fragment } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './index.css'

const NavSearch = () => {

    /* Search functionSmaller screen */
    const searchContext = useContext(SearchContext)
    
    const handelClick = () => {
        searchContext.setSearchBarIsOpen(false)
    }

    return (
        <Fragment>
        <div className="navbar-search">
            <div className="search-bar-container">
                <div className="search-bar">
                    <div className="search-bar-equal">
                        <div className="search-bar-inner">
                            <div className="search-bar-inner-child">
                                <div className="search-bar-form">
                                    <div className="search-bar-icon">
                                    </div>
                                    <input type='search' placeholder='Search items, collections, and accounts' role='searchbox' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {searchContext.searchBarIsOpen && 
            <div className="search-small-screen">
                <div className="cancel-search">
                    <div className="cancel-search-icon">
                        <ArrowBackIosNewIcon fontSize='large' onClick={handelClick}/>
                    </div>
                </div>
                <div className="search-bar-inner-sm">
                    <div className="search-bar-inner-child-sm">
                        <div className="search-bar-form-sm">
                            <div className="search-bar-back-icon">
                            </div>
                            <input type='search' placeholder='Search items, collections, and accounts' role='searchbox' />
                        </div>
                    </div>
                </div>
            </div>
            }
        </Fragment> 
     );
}
 
export default NavSearch;
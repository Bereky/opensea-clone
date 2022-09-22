import { useEffect, useState } from 'react';
import './index.css'

const NavSearch = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ width, setWidth ] = useState()


    useEffect(() => {
        const updateWidth = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth)
            if(newWidth <= 600 ){
                console.log("inner width", newWidth)
                /* setIsOpen(true) */
            }
            else {
                setIsOpen(false)
            }
        }
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    return ( 
        <div className="navbar-search">
            {isOpen && 
                <div className="search-small-screen">
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
            <div className="search-bar-container">
                <div className="search-bar">
                    <div className="search-bar-equal-sm">
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
     );
}
 
export default NavSearch;
import { useContext, useState } from "react"
import { SearchContext } from "./SearchContext"

export const SearchProvider = ({ children }) => {
    const [ open, setOpen] = useState()

    const setIsOpen = () => {
        if(open){
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    const searchCxt = {
        searchBarIsOpen: open,
        setSearchBarIsOpen: setIsOpen
    }

    return(
        <SearchContext.Provider value={searchCxt}>
            {children}
        </SearchContext.Provider>
    ) 
}
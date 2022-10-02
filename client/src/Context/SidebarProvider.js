import { useContext, useState } from "react"
import { SidebarContext } from "./SidebarContext"

export const SidebarProvider = ({ children }) => {
    const [ open, setOpen] = useState()

    const setIsOpen = () => {
        console.log("update")
        if(open){
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    const sidebarCxt = {
        siderBarIsOpen: open,
        setSideBarIsOpen: setIsOpen
    }

    return(
        <SidebarContext.Provider value={sidebarCxt}>
            {children}
        </SidebarContext.Provider>
    ) 
}
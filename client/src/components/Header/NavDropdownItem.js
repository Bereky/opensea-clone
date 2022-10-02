

const NavDropdownExplore = (props) => {
    return ( 
        <li className="dropdown-list-item">
            <a href="#" className="dropdown-list-item-link">
                <div className="list-item-icon">
                    <div className="icon-con">
                        <img src={props.imageSource} alt={props.altText} className="icon-image" />
                    </div>
                </div>
                <div className="list-item-name">
                    <span className="item-name">{props.listName}</span>
                </div>
            </a>
        </li>
     );
}

const NavDropdownStats = (props) => {
    return (
        <li className="dropdown-list-item">
            <a href="#" className="dropdown-list-item-link">
                <div className="list-item-name">
                    <span className="item-name">{props.name}</span>
                </div>
            </a>
        </li>
    )
}

const NavDropDownResources = (props) => {
    return (
        <li className="dropdown-list-item">
            <a href="#" className="dropdown-list-item-link">
                <div className="list-item-name">
                    <span className="item-name">{props.name}</span>
                </div>
            </a>
        </li>
    )
}

const NavDropdownAccount = (props) => {
    return (
        <li className="dropdown-list-item">
            <a href="#" className="dropdown-list-item-link">
                <div className="list-item-icon">
                    <div className="icon-con">
                        {props.icon}
                    </div>
                </div>
                <div className="list-item-name">
                    <span className="item-name">{props.name}</span>
                </div>
            </a>
        </li>
    )
}
 
export {
    NavDropdownStats,
    NavDropdownExplore,
    NavDropDownResources,
    NavDropdownAccount
};
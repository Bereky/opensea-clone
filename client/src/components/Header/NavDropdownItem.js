

const NavDropdownItem = (props) => {
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
 
export default NavDropdownItem;
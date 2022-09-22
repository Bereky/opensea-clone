import './index.css'

const NavBrand = () => {
    return ( 
        <div className="navbar-brand">
            <a href="#" className="nav-brand">
                <div className="brand">
                    <span className="brand-logo">
                        <img src="https://opensea.io/static/images/logos/opensea.svg" alt="Opensea Logo" className='brand-logo-image'/>
                    </span>
                </div>
                <div className='brand-name'>
                    <span>OpenSea</span>
                </div>
            </a>
        </div>
     );
}
 
export default NavBrand;
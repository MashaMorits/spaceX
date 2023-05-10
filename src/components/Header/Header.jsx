import Navigation from "../Navigation/Navigation";
import logo from '../../images/SpaceX-Logo.png';
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
    const [ isOpen, setIsOpen] = useState(false)

    function openMobile() {
        setIsOpen(prev=> !prev)
        document.querySelector('body').classList.toggle('opened')
    }

    return ( 
        <header className="header">
            {isOpen && <MobileMenu/>}
            <div className='container'>
                <div className='header__wrapper'>
                    <div className={isOpen ? 'open__mobile active' : "open__mobile"} onClick={() => openMobile() }>
                            <span></span>
                    </div>
                    <a className="logo">
                        <img src={logo} />
                    </a>                
                    <Navigation />
                </div>
            </div>        
        </header>
     );
}

export default Header;
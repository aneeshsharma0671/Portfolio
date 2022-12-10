import React,{useState} from 'react';
import {
Nav,
NavLink,
NavList,
NavMenu,
Sidebar,
IconContainer,
} from './NavbarElements';
import Logo from './LogoA.svg';
import './navbar.css';
import { FaBars} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const[navbaropen,setNavbarOpen] = useState(false);
    const handleToggle = () => { setNavbarOpen(!navbaropen);}
return (
	<>
	<Nav>
        <a href="/portfolio/" onClick={()=>setNavbarOpen(false)}><img src={Logo} alt="Aneesh"/></a>
        <IconContainer onClick={handleToggle} >{navbaropen?<ImCross/>:<FaBars/>}</IconContainer>
		<NavMenu>
            <NavLink to='/portfolio/projects' activeStyle>
                Projects
            </NavLink>
            <NavLink to='/portfolio/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/portfolio/contact' activeStyle>
                Contact
            </NavLink>
		</NavMenu>
	</Nav>
    <Sidebar display={navbaropen}>
        <NavList>
            <li><a href='/portfolio/projects' onClick={handleToggle}>Projects</a></li>
            <li><a href='/portfolio/about' onClick={handleToggle}>About</a></li>
            <li><a href='/portfolio/contact' onClick={handleToggle}>Contact</a></li>
        </NavList>
    </Sidebar>
	</>
);
};

export default Navbar;

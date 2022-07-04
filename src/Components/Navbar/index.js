import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Logo from './LogoA.svg';

const Navbar = () => {
return (
	<>
	<Nav>
        <NavLink to="/"><img src={Logo} alt="Aneesh"/></NavLink>
		<Bars />
		<NavMenu>
            <NavLink to='/projects' activeStyle>
                Projects
            </NavLink>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

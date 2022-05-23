// import React from 'react'
// import { Menu, Container } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { NavbarContainer } from './Styles/Navbar.style';
import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Styles/Navbar.style";

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/people"> People</NavbarLink>
            <NavbarLink to="/planets"> Planets</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <h1>The Star Wars API</h1>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/people"> People</NavbarLinkExtended>
          <NavbarLinkExtended to="/planets"> Planets</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
    // <Menu>
    //   <Container>
    //     <Link to='/'>
    //       <Menu.Item name='star wars API'/>
    //     </Link>
    //     <Link to='/people'>
    //       <Menu.Item name='people'/>
    //     </Link>
    //     <Link to='/planets'>
    //       <Menu.Item name='planets'/>
    //     </Link>         
    //   </Container>
    // </Menu>
  )
}

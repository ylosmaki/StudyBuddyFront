import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {NavLink} from "react-router-dom";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <NavBar style={barAnimation}>
                <FlexContainer>
                    <Brand />
                    <NavLinks style={linkAnimation}>
                        <nav>
                            <NavLink exact activeClassName='nav-active' to="/">Home</NavLink>
                            <NavLink activeClassName='nav-active' to="/dictionary">Dictionary</NavLink>
                            {/*<NavLink activeClassName='nav-active' to="/week1">Week 1</NavLink>*/}
                            {/*<NavLink activeClassName='nav-active' to="/sammy1">Code for Sammy 1</NavLink>*/}
                        </nav>
                    </NavLinks>
{/*                    <NavLinks style={linkAnimation}>
                        <a href="/">Home</a>
                        <a href="/">Dictionary</a>
                        <a href="/">Week 1</a>
                    </NavLinks>*/}
                    <BurgerWrapper>
                        <BurgerMenu
                            navbarState={props.navbarState}
                            handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
            />
        </>
    )
}

export default Navbar
/*
                    <NavLinks style={linkAnimation}>
                        <nav>
                        <NavLink exact activeClassName='nav-active' to="/">Home</NavLink>
                        <NavLink activeClassName='nav-active' to="/dictionary">Dictionary</NavLink>
                        <NavLink activeClassName='nav-active' to="/week1">Week 1</NavLink>
                        </nav>
                    </NavLinks>*/

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

//#2d3436

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 10rem; 
`;
//height oli 5rem

const NavLinks = styled(animated.ul)`
  justify-self: center;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

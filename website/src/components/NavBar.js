import React from 'react'
import styled,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
// import bars from '../images/bars.svg'
import {FaBars} from 'react-icons/fa'

const Nav=styled.nav`
height:60px;
width: 100%;

display:flex;
justify-content: space-between;
padding:1rem 2rem;
z-index: 100;
position: fixed;
`;
const NavLink=css`
color:#fff;
display:flex;
align-items:center;
padding: 0 1rem;
height: 100%;
cursor: poniter;
text-decoration: none;
`;

const Logo=styled(Link)`
${NavLink}
font-style: italic;
`;

const MenuBars=styled(FaBars)`
display:none;

@media screen and (max-width:768px){
    display: block;
    cursor: pointer;
    position: absolute;
    height: 20px;
    width: 20px;
    right:20px;
    transform: translate(-50%,25%);
}
`;

const NavMenu=styled.div`
display: flex;
align-item: center;
margin-right:-48px;

@media screen and (max-width:768px){
display: none;
}
`;

const NavMenuLinks=styled(Link)`
${NavLink}
`;

const NavBtn=styled.div`
 display: flex;
 align-items:center;
 margin-right:24px;

 @media screen and (max-width:768px){
    display: none;
    }
`;


const NavBar = () => {
    return (
        <Nav>
            <Logo to='/'>LOGO</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index} >{item.title}</NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/content' primary='true'>Contact Us</Button>
            </NavBtn>
            
            
        </Nav>
    )
}

export default NavBar

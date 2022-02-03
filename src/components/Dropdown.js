import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';


const DropdownContainer=styled.div`
position:fixed;
z-index:999;
width:100%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
top:0;
left: 0;
transition: 0.2s ease-in-out;
opacity: ${({isOpen})=>(isOpen? '1': '0')};
top: ${({isOpen})=>(isOpen? '0': '-100%')};
`
const Icon=styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`;

const CloseIcon=styled(FaTimes)`
color: #fff;
`;

const DropdownWrapper=styled.div``;

const DropdownMenu=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align:center;
margin-bottom: 4rem;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
}
`;

const DropdownLink=styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size:1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
    color:#000d1a;
}
`;

const BtnWrap=styled.div`
display: felx;
justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div>
            <DropdownContainer isOpen={isOpen} >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <DropdownWrapper>
                    <DropdownMenu>
                        {menuData.map((item,index)=>{
                            return <SubMenu item={item} key={index} />
                        })}
                    </DropdownMenu>
                    <BtnWrap>
                        <Button primary='true' round='true' big='true' to='/content'>Contact Us</Button>
                    </BtnWrap>
                </DropdownWrapper>
            </DropdownContainer>
            
        </div>
    )
}

export default Dropdown

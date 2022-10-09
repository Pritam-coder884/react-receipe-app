import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import React from 'react'
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
        <SLink to={"/cuisine/American"}>
            <FaPizzaSlice />
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Indian"}>
            <FaHamburger />
            <h4>Indian</h4>
        </SLink>
        <SLink to={"/cuisine/chinese"}>
            <GiNoodles />
            <h4>chinese</h4>
        </SLink>
        <SLink to={"/cuisine/japanese"}>
            <GiChopsticks />
            <h4>japanese</h4>
        </SLink>
    </List>
  )
}
const List=styled.div`
display:flex;
justify-content:center;
margin:2rem 0;
`
const SLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:0.8rem;
}
svg{
    color:white;
    font-size:1.5rem;
}
&.active{
    background:linear-gradient(to right,#f27121,#e94057);
    svg{
        color:white;
    }
}
`
export default Category
import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input,setInput]=useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input);
    };
  return (
    <div>
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input onChange={(e) =>setInput(e.target.value) }type="text" value={input}/>
        </FormStyle>
    </div>
  )
}
const FormStyle=styled.form`
margin:0rem 5rem;
position:relative;
width:100%;
input{
    border:none;
    background:linear-gradient(35deg ,#494949,#313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:80%;
}
svg{
    position:absolute;
    font-size:1.7rem;
    top:50%;
    left:-15px;
    transform:translate(100%,-50%);
    color:white;
    cursor:pointer;
}
`

export default Search
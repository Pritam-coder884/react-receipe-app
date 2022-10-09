import React from "react";
import Page from "./pages/Page";
import Category from "./components/Category";
import { BrowserRouter , Link} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>delicious</Logo>
      </Nav>
      <Search />
        <Category />
        <Page />
      </BrowserRouter>
    </div>
  );
};
const Logo=styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
`
const Nav =styled.div`
padding:1rem 0rem;
display:flex;
svg{
  font-size:2rem;
}
`

export default App;

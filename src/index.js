import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: absolute;
  right: 0;
`;

const NavLink = styled.a`
  color: black;
  text-align: center;
  padding: 8px 5px;
  text-decoration: none;
`;

const judul = <h2>BOOTCAMP Batch 8 : Experiment with REACTJS</h2>
ReactDOM.render(judul, document.getElementById("title"));

const element = <h1>This is React</h1>
ReactDOM.render(element, document.getElementById("root"));

const navigasi = (
  <NavWrapper>
    <NavLink href="#Contact">Home</NavLink>
    <NavLink href="#About">About</NavLink>
    <NavLink href="#Home">Contact</NavLink>
  </NavWrapper>
);
ReactDOM.render(navigasi, document.getElementById("nav"));




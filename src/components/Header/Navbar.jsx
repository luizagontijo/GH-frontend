import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,120,129,1) 35%, rgba(222,184,65,1) 100%);
  height: 100vh;
  width: 220px;
  position: fixed;
  box-shadow: 0 0 15px rgba(0,0,0,0.6);
  border-bottom: 2px solid #f1f1f1;
  padding: 10px;
  text-decoration: none;
  //flex-flow: row nowrap;
  //justify-content: space-between;
  color: #f1f1f1;

  .logoName {
    padding-top: 10px;
    width: 100%;
  }
  .simbolo{
    padding-bottom: 10px;
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 0;
    height: 100%;

  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link to="/admin" >
      <div className="logoName">
        <img src={logo} className="simbolo" alt="logo da global hitss"/>
      </div></Link>
      
      <Burger />
    </Nav>
  )
}

export default Navbar
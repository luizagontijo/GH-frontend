import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { BsPeopleCircle } from 'react-icons/bs';
import { MdExitToApp } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';


const Ul = styled.ul`
  list-style: none;
  display: grid;
  flex-flow: row nowrap;
  text-decoration: none;
  li {
    margin: 10px;
    text-decoration: none;
    display: block;
      padding: 0.3em;
    
      a{
        margin: 0;
        color: #f1f1f1;
        padding: 10px;
        text-decoration: none;
      }
  }
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #9EA1A2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    text-decoration: none;
    
    li {
      color: #fff;
      text-decoration: none;
      border-radius: 7px;
      display: block;
      padding: 0.3em;
    }
  }
  li:hover { 
    background-color: #37323E;
    border-radius: 7px;
        transition: all 0.7s ease-in;
     display: block; 
    padding: 0.3em;
    }
    
  .btnSair{
    margin: 140px 10px 10px 10px;
    width: 15vh;
    background-color:white;
    border-radius: 20px;
    border: 1px solid #eee;
    a{
      text-decoration: none;
       color:#37323E;
    }
  }

 
 
 .btnSair:hover { 
    background-color: #00ABC2;
    border-radius: 20px;
    border: 1px solid #eee;
    transition: all 0.7s ease-in;
    text-decoration: none;
}
`;

// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }

const RightNav = ({ open }) => {
  return (
    <>
   
    <Ul open={open}>
        <li><Link to="/admin" ><AiOutlineHome /> Home</Link></li>
        <li><Link to="/times"><HiOutlineUserGroup /> Times </Link></li>
        <li><Link to="/usuarios"><BsPeopleCircle /> Usuários</Link></li>
        <li><Link to="/formularios" ><AiOutlineForm /> Formulários</Link></li>
        {/* <li><Link to="/perguntas" ><AiOutlineQuestionCircle /> Perguntas</Link></li> */}
        {/*<li><Link to="/respostas" ><BsPencil /> Respostas</Link></li>*/}
        
        <button className="btnSair" onClick={() => window.location.href = '/' }> S A I R </button>
    
    </Ul>
    </>
  )
}

export default RightNav
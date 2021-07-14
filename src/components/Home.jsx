import React, { useState } from 'react';
import logo from '../assets/logo.png';
import LoginForm from '../pages/Login'
import Times from '../pages/Times/Main';
import Navbar from './Header/Navbar';
import Content from './Content';

function Home() {

  const adminUser = {
    username: "admin",
    password: "admin"
  }

  //const colabUser = {
    //username: "colaborador",
   //password: "colaborador"
  //}

  //const gestorUser = {
    //username: "gestor",
   // password: "gestor"
  

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log("Logado");
      setUser({
        username: details.username,
        password: details.password,
      })
    } else {
      console.log("Usuario ou senha invalidos")
      setError("Usuario ou senha invalidos")
    }
  }

   //const Logout = details => {
    // console.log("Logout");
   // setUser({username: "", password: ""}); 
   //}

   const [state, setState] = useState({
     usuarios: []
   })

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div className="home">
          <div className="welcome">
              <h4 className="nomeusu text-muted small">Bem-vindo, <span>{user.username}</span></h4>
              <Navbar />
              <Content />
              
           </div>
           </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
    
  )
}

export default Home;
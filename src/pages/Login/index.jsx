import React, { useState } from 'react'
import './index.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    
    return (
        <div className="tudo">
            <div className="cartao">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            {/*<form onSubmit={submitHandler}>*/}

                <div className="login-wrapper">
                    <h1 className="login">L O G I N</h1>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}

                    <div className="form-group">
                        <label className="labellogin" htmlFor="username">U S U A R I O: </label>
                        <input type="text" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>

                    <div className="form-group2">
                        <label className="labellogin" htmlFor="password">S E N H A: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <button className="btnlogin" onClick={() => window.location.href = '/admin' }>E N V I A R</button>
                </div>
            {/*</form>*/}
        </div>
    )
   
}

export default LoginForm;

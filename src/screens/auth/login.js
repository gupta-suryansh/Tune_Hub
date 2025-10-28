import React from 'react'
import {loginEndpoint} from '../../spotify';
import './login.css';

export default function Login() {
  return (
    <div className="Login-page">
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo-spotify" className="logo"/>
        <a href={loginEndpoint}><div className="login-btn">LOG IN</div></a>
    </div>
  )
}

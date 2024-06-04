import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Login() {
    const locaction = useLocation()
    console.log(locaction.state.email);
    
    return (
      <div>login <br />
      <label htmlFor="">Email</label>
      <input type="text" /> <br />
      <label htmlFor="">Pass</label>
      <input type="text" /> <br />
      <button>Login</button>
      </div>
    )
  }
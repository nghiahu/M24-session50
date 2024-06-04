import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';

export default function Login5() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const userData = {
    email: 'nam@gmail.com',
    password: '123',
    role: 'user'
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (
      email === userData.email &&
      password === userData.password &&
      role === userData.role
    ) {
      setIsAuthenticated(true);
    } else {
      setError(' lỗi đăng nhập');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/account" />;
  }

  return (
    <div className="login">
      <div >
        <p className="title">Đăng nhập</p>
        {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <input type="email" className="inp" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="inp" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">---Chọn quyền---</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button type="submit" className="bnt">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

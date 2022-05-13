import React, { useState, useEffect, useRef } from "react";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import create from "../../utils/create";

function UserRegister({ header }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const onUserChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    create(user, "users", setUser, {
      username: "",
      password: "",
      name: "",
      email: "",
    });
  };

  return (
    <div className="create">
      {header}
      <h3>New User</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={onUserChange}
          value={user.username}
          placeholder="Username"
          name="username"
        />
        <br></br>
        <input
          type="password"
          onChange={onUserChange}
          value={user.password}
          placeholder="Password"
          name="password"
        />
        <br></br>
        <input
          type="text"
          onChange={onUserChange}
          value={user.name}
          placeholder="Name"
          name="name"
        />
        <br></br>
        <input
          type="email"
          onChange={onUserChange}
          value={user.email}
          placeholder="Email"
          name="email"
        />
        <br></br>
        <button className="btn btn-large right">Sign Up</button>
      </form>
    </div>
  );
}

export default UserRegister;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getById from "../../utils/getById";
import axios from "axios";

//TODO: check database for user, and check if user isAdmin
//TODO: jwtoken stored in storage, use token to look for var isAdmin and either display "addBook" or hide

export default function UserLogin({ header, footer }) {
  const { id } = useParams();

  const [userLogin, setUserLogin] = useState([]);

  // useEffect(() => {
  //   getById("users", id, setUserLogin);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await getById("users", id, setUserLogin);

    await console.log(userLogin.email, userLogin.status);
  };

  return (
    <form className="form">
      {header}
      <div className="login--container">
        <label>
          {/* {console.log(userLogin)} */}
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      {footer}
    </form>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

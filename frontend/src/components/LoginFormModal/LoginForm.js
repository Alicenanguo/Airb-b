import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
// console.log("------------------------")

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        if (res.status === 401)
          setErrors(["The credential provided were inValid"])
       }
    );
  };


  return (
    <div className="model_login">


        <form className='model_form' onSubmit={handleSubmit}>
          <div className="title_login">Log in</div>
          <div className="welcome">Welcome to Airbnb!</div>
          <ul className="error_container">
            {errors.map((error, idx) => (
              <li className="error" key={idx}>{error}</li>
            ))}
          </ul>
          <label className="update_hosting_title">
            Username or Email
          <input
            className="placeholder_info"
              type="text"
              value={credential}
            onChange={(e) => setCredential(e.target.value)}
            // placeholder='Username or Email'
              required
            />
          </label>
          <label className="update_hosting_title">
            Password
          <input
            className="placeholder_info"
              type="password"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            // placeholder='Password'
              required
            />
          </label>
          <button className='submit' type="submit">Log In</button>

          <button
            id='demoUser'
            type='submit'
            onClick={() => {
              setCredential('Demo-lition')
              setPassword('password')
            }}
          >
            Demo Login
          </button>
        </form>

      </div>
  );
}

export default LoginForm;

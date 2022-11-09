import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import "./SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          username,
          password,
          firstName,
          lastName,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className="signup_form"
      onSubmit={handleSubmit}>

      <div className="title_signup">Sign Up</div>
      <div className="welcome">Welcome to Airbnb!</div>

      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="table">
      <label >

        <input className="signup_table"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='FirstName'
          required
        />
      </label>
      <label >

        <input className="signup_table"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='LastName'
          required
        />
      </label>
      <label >

        <input className="signup_table"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
      </label>
      <label >

        <input className="signup_table"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          required
        />
      </label>
      <label >

        <input className="signup_table"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
      </label>
      <label >

        <input className="signup_table"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
          required
        />
        </label>
        </div>
      <button type="submit" className="submit_signup">Sign Up</button>
    </form>
  );
}

export default SignupForm;

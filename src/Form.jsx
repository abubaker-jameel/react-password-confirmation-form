import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsLetter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Password do not match");
      return;
    }

    if (formData.joinedNewsLetter) {
      console.log("Thanks for joining our newsletter!");
    }
  }
  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            id=""
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form--input"
          />
          <input
            type="password"
            placeholder="Password"
            id=""
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form--input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id=""
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form--input"
          />
          <div className="form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsLetter"
              checked={formData.joinedNewsLetter}
              onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="form--submit">Sign up</button>
        </form>
      </div>
    </>
  );
}

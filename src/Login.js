import React, { useState } from "react";
// import { WebsiteLayout } from "./layouts/WebsiteLayout";
// import { Container , Row , Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import { Home } from './pages/Home';
import { WebsiteLayout } from "./layouts/WebsiteLayout";
// import Dashboard from './Dashboard';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   let users = [];
  //   const usersGet = localStorage.getItem("users");

  //   if (usersGet) {
  //     const usersArr = JSON.parse(usersGet);
  //     users = [...usersArr];
  //   }

  //   const user = users.find((user) => {
  //     return user.email === email && user.password === password;
  //   });

  //   if (user) {
  //     localStorage.setItem("loggedInUser", JSON.stringify(user));
  //     setIsSubmitted(true);
  //   } else {
  //     alert("Incorrect email or password!");
  //   }
  // };

  const handleSubmit = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:3000/Login",
        requestOptions
      );
      if (!response.ok) {
        const err = await response.json();
        alert(err.error);
        return;
      }

      const result = await response.json();
      console.log(result);
      dashboardlogin();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const dashboardlogin = (e) => {
    navigate("/Dashboard");
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            type="text"
            name="uname"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            id="password"
            required
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="button-container">
          <input onClick={() => handleSubmit()} type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <WebsiteLayout>
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? (
            <div>
              User is successfully logged in<br></br>{" "}
              <input
                type="Submit"
                class="btn btn-success"
                onClick={(e) => dashboardlogin(e)}
              />
            </div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </WebsiteLayout>
  );
}

export default Login;

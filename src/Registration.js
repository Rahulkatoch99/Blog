import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WebsiteLayout } from "./layouts/WebsiteLayout";
import "./App.css";
function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "gender") {
      setGender(value);
    }
    if (id === "address") {
      setAddress(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  // const handleSubmit = () => {
  //   if (password === confirmPassword) {
  //     let users = [];
  //     const usersGet = localStorage.getItem("users");

  //     if (usersGet) {
  //       const usersArr = JSON.parse(usersGet);
  //       users = [...usersArr];
  //     }

  //     const user = {
  //       id: Math.random().toString(),
  //       firstName: firstName,
  //       lastName,
  //       email,
  //       password,
  //     };

  //     users.push(user);

  //     localStorage.setItem("users", JSON.stringify(users));
  //     alert("Registration is successfull!");

  //     if (user) {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     alert("Password didn't match");
  //   }
  // };

  const handleSubmit = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      phone: phone,
      address: address,
      email: email,
      password: password,
      Confirmpassword: confirmPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/registration",
        requestOptions
      );

      if (!response.ok) {
        const err = await response.json();
        alert(err.error);
        return;
      }

      const result = await response.json();
      console.log(result);
      login();
    } catch (error) {
      alert(error.message);
    }
  };

  const login = (e) => {
    navigate("/login");
  };

  const renderForm = (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form">
              {/* <div className="form-body"> */}
              <div className="input-container">
                <label className="form__label" htmlFor="firstName">
                  First Name{" "}
                </label>
                <input
                  className="form__input"
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => handleInputChange(e)}
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="lastName">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id="lastName"
                  value={lastName}
                  className="form__input"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="LastName"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="gender">
                  Gender{" "}
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id="gender"
                  value={gender}
                  className="form__input"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Gender"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="phone">
                  Phone{" "}
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id="phone"
                  value={phone}
                  className="form__input"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Phone"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="address">
                  Address{" "}
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id="address"
                  value={address}
                  className="form__input"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Address"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="email">
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="form__input"
                  value={email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Email"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="password">
                  Password{" "}
                </label>
                <input
                  className="form__input"
                  required
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Password"
                />
              </div>
              <div className="input-container">
                <label className="form__label" htmlFor="confirmPassword">
                  Confirm Password{" "}
                </label>
                <input
                  className="form__input"
                  required
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Confirm Password"
                />
              </div>
              {/* </div> */}
              <div className="button-container">
                <button
                  onClick={() => handleSubmit()}
                  type="submit"
                  className="btn  btn-success"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <WebsiteLayout>
      <div className="app">
        <div className="login-form">
          <div className="title">Registration</div>
          {isSubmitted ? (
            <div>
              Registration successfully <br></br>{" "}
              <input
                type="Submit"
                class="btn btn-success"
                onClick={(e) => login(e)}
                placeholder="login"
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

export default RegistrationForm;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import React from "react";
import About from "./About.js";
import Login from "./Login";
import RegistrationForm from "./Registration";
import { Dashboard } from "./Dashboard";
import { Getpost } from "./Getpost";
import { Post } from "./Posts";

function App() {
  return (
    // <div>
    //  {/* <MyNav/> */}

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Registration" element={<RegistrationForm />} />
        <Route exact path="/Login" element={<Login />} />
        {/* <Route exact path="/" element={<Home/>} /> */}
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="Getpost" element={<Getpost />} />
        <Route exact path="Post" element={<Post />} />
      </Routes>
    </BrowserRouter>
    //   {/* <div>
    //     <MyCarousel/>
    //   </div>
    //   <Container>
    //     <div>
    //       <MyGrid/>
    //     </div>
    //   </Container>
    //   <div>

    //   </div>
    // </div> */}
  );
}

export default App;

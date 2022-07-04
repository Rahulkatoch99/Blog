import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import "./App.css";
import Blogpost from "./Blogpost";
import { Sidebar } from "./Sidebar";
// import { WebsiteLayout } from "./layouts/WebsiteLayout";
// import MyNav from "./Nav";

export const Dashboard = () => {
  return (
    <div>
      <Blogpost />
      <Sidebar />
      {/* {Object.entries(localStorage).map(([key, valueJSON]) => {
        const value = JSON.parse(valueJSON);

        return (
          <div>
            <p>{value}</p>
            <p>{value.id}</p>
            <p>{value.title}</p>
            <p>{value.body}</p>
            <p>{value.name}</p>
            <input checked={value.active} type="checkbox"></input>
            <Link to={"/products/" + key}>VIEW</Link>
            <Link to={"/products/" + key + "/edit"}>EDIT</Link>
            <button>DELETE</button>
          </div>
        );
      })} */}
    </div>
  );

  // Dashboard blogging post start here
};

// <div> <h1> hello</h1> </div>;

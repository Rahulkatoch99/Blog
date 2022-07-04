import React from "react";

export function Sidebar() {
  const blogs = JSON.parse(localStorage.getItem("blogs"));

  const remove = (e, id) => {
    const arr = [...blogs];

    const findIndex = arr.findIndex((blog) => {
      return blog.id === id;
    });

    if (findIndex > -1) {
      arr.splice(findIndex, 1);
      localStorage.setItem("blogs", JSON.stringify(arr));
    }
  };

  return (
    <div class="wrapper">
      <div class="sidebar">
        <div class="profile">
          <img src="assets/imags/Profile.jpg" alt="profile_picture" />
          {/* {blogs.map((user) => { */}
          <h3>{blogs.name}</h3>
          <p>Web Developer</p>
        </div>
        <ul>
          <li>
            <a href="/Dashboard" className="active">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span class="item">Blog</span>
            </a>
          </li>
          <li>
            <a href="/Post">
              <span className="icon">
                <i className="fas fa-desktop"></i>
              </span>
              <span class="item">Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon">
                <i class="fas fa-user-friends"></i>
              </span>
              <span class="item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import "./App.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Blogpost() {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");

  const { state } = useLocation();
  // console.log(state);
  useEffect(() => {
    //to fetch the exictig data by the current id
    if (state?.isEdit) {
      setTitle(state.title);
      setBlog(state.body);
    }
  }, [state]);

  const handleInputChange = (e) => {
    // this is the event to input the value in the state
    const { id, value } = e.target;
    if (id === "title") {
      setTitle(value);
    }
    if (id === "blog") {
      setBlog(value);
    }
  };

  const handleSubmit = () => {
    let blogs = [];
    const user = localStorage.getItem("loggedInUser");

    const res = JSON.parse(user);

    const blogStr = localStorage.getItem("blogs");
    if (blogStr) {
      const blogArr = JSON.parse(blogStr);

      blogs = [...blogArr];
      console.log(blogs);
    }

    const blogPost = {
      id: Math.random().toString(),
      userId: res.email,
      title: title,
      body: blog,
      createdOn: "",
      isDraft: false,
    };
    if (state?.isEdit) {
      const index = blogs.findIndex((blog) => {
        return blog.id === state.id;
      });
      delete blogPost.id;
      blogs[index] = { ...blogPost, id: state.id };
    } else {
      blogs.push(blogPost);
    }

    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Your Blog is uploaded");
  };

  const renderForm = (
    <div className="form">
      {/* <div className="form-body"> */}
      <div class="input-container">
        <label htmlFor="exampleFormControlInput1">Title</label>
        <input
          value={title}
          id="title"
          required
          type="text"
          onChange={(e) => handleInputChange(e)}
          placeholder="Title of your Blogs"
        />
      </div>
      <div class="input-container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Start of your Blogs here
        </label>
        <textarea
          className="form-control"
          value={blog}
          id="blog"
          required
          type="text"
          onChange={(e) => handleInputChange(e)}
          rows="3"
        ></textarea>
        <br></br>
        <div className="button-container">
          <button
            onClick={() => handleSubmit()}
            type="submit"
            class="btn btn-success"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Blog</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Blogpost;

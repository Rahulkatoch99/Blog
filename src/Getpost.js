import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

export function Getpost() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    let arryBlog = [];
    const blogString = localStorage.getItem("arryBlogs");
    if (blogString) {
      const Blog = JSON.parse(blogString);
      arryBlog = [...Blog];
      setBlogs(arryBlog);
    }
  }, []);
  // const blogs = JSON.parse(localStorage.getItem("blogs"));
  return (
    <div className="row">
      {blogs.map((blog) => {
        return (
          <div className="col-md-3">
            <div class="centerflipcards">
              <div class="square-flip">
                <div class="square  pp">
                  <div class="square-container">
                    <div class="align-center">
                      <img
                        // src="http://titanicthemes.com/files/flipbox/kallyas2.png"
                        class="boxshadow"
                        alt=""
                      />
                    </div>
                    <h2 class="textshadow">{blog.title}</h2>
                    <h3 class="textshadow">{blog.body}</h3>
                  </div>
                  <div class="flip-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

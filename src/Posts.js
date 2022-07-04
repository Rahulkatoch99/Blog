import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Post() {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let arryBlog = [];
    const blogString = localStorage.getItem("arryBlogs");
    if (blogString) {
      const Blog = JSON.parse(blogString);
      arryBlog = [...Blog];
      setBlogs(arryBlog);
    }
  }, []);

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

  const Edit = (id, title, body) => {
    navigate("/Dashboard", {
      state: {
        id: id,
        title: title,
        body,
        isEdit: true,
      },
    });
  };

  return (
    <div className="container-fluid">
      <div className="row m-4">
        <div class="col">
          <Sidebar />;
        </div>

        <div className="col-md-9">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">User_ID</th>
                <th scope="col">Title</th>
                <th scope="col">Blog</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => {
                return (
                  <tr class="table-info">
                    <th scope="row">{blog.id + 1}</th>
                    <td>{blog.userId}</td>
                    <td>{blog.title}</td>
                    <td>{blog.body}</td>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className=" btn  btn-primary"
                        onClick={(e) => Edit(blog.id, blog.title, blog.body)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="  btn-danger btn"
                        onClick={(e) => remove(e, blog.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

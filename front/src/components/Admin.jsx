import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Admin() {
 
  const handle = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="d-flex w-100 kas1 container">
        <div className="w-25  d-flex flex-column justify-content-around">
          <NavLink
            to="/admin/studadd"
            className="btn btn-outline-danger border-3 w-100"
          >
            Add Student
          </NavLink>
          <NavLink
            to="/admin/bookadd"
            className="btn btn-outline-danger border-3 w-100"
          >
            Add Book
          </NavLink>
          <NavLink
            to="/admin/books"
            className="btn btn-outline-danger border-3 w-100"
          >
            Books
          </NavLink>
          <NavLink
            to="/"
            className="btn btn-outline-danger border-3 w-100"
            onClick={handle}
          >
            Logout
          </NavLink>
        </div>
        <div className="w-75">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;

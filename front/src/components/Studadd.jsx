import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Studadd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:1441/admin/studadd", {
        name,
        email,
        password,
        role,
      });
      console.log(result);
    } catch (error) {
      if (error.response.data.errorMessage === "User is already registered") {
        alert("This email is already in use");
      } else {
        console.log("error:", error);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center kas1">
      <div className="bg-white p-3 rounded w-50">
        <h2>Add Student</h2>
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="@gmail.com"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              placeholder="password"
              name="pass"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="form-select">Role</label>
            <select
              class="form-select"
              onChange={(e) => {
                setrole(e.target.value);
              }}
            >
              <option value="admin">admin</option>
              <option value="student">student</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-outline-danger w-100 rounded-0"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default Studadd;

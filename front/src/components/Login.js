import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setrole] = useState("admin");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:1441/login", {
                email,
                password,
                role
            });
            console.log("Response:", response);
            if (response.data.data.role === "admin") {
                localStorage.setItem("token", response.data.data.token);
                navigate("/admin");
            }
            else if (response.data.data.role === "student") {
                localStorage.setItem("token", response.data.data.token);
                navigate("/book_1");
            }
        } catch (error) {
            if (error.response.data.message === "Authentication failed" || error.response.data === "invalid credential") {
                alert("Credentials not found");
            }

            console.log("Error:", error);
        }
    };


    return (
        <div className="d-flex justify-content-center align-items-center kas1">
            <div className="bg-white p-3 rounded w-25  border border-danger">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="@gmail.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-select">Role</label><select class="form-select" onChange={(e) => { setrole(e.target.value) }}>
                            <option>Choose</option>
                            <option value="admin">admin</option>
                            <option value="student">student</option>
                        </select></div>
                    <button type="submit" className="btn btn-outline-danger w-100 rounded-0" >
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Login;

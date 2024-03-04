import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    const [data, setData] = useState("Login");
    const [log, setLog] = useState("/login");
    var token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            setData("Logout");
            setLog("/");
        }

    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setData("Login");
        setLog("/login");
    };
    return (
        <div className='container'>
            <div className='d-flex justify-content-between py-4'>
                <div><NavLink to="/" className="text-decoration-none text-dark fs-2 text-uppercase">Bookeng</NavLink></div>
                <div>
                    <NavLink to={log} className='text-decoration-none btn btn-outline-danger' onClick={data === "Login" ? null : handleLogout}>{data}</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

import React, { useEffect } from 'react'
import {jwtDecode}  from "jwt-decode";
import { Outlet, useNavigate } from 'react-router';
function Protected1() {
    const navigate = useNavigate()
        useEffect(()=>{
            const token = localStorage.getItem("token");
            const role = jwtDecode(token).role;
            if(role!=="admin"){
               navigate("/book_1")  
            }
        },[])
  return (
    <div>
    <Outlet/>
    </div>
  )
}

export default Protected1
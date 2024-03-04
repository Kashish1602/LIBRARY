import { useEffect } from 'react'
import {jwtDecode} from "jwt-decode";
import { Outlet, useNavigate } from 'react-router';
function Protected2() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = jwtDecode(token).role;
        if (role !== "student") {
            navigate("/admin/")
        }
    }, [])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Protected2
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

function Protected() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Protected;

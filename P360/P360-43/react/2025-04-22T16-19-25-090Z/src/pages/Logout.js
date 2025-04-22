import React from "react";
import { useHistory } from "react-router-dom";

export const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push("/login");
  };

  // Render logout button
  // ...
};
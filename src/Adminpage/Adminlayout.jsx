import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../Userpage/UserHome";
import AdminHeader from "./AdminHeader";
const Adminlayout = () => {
  return (
    <div>
      <AdminHeader />

      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

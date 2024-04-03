import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserHome from "./UserHome";
const Userlayout = () => {
  return (
    <div>
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </div>
  );
};

export default Userlayout;

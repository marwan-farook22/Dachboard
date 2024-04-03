import React from "react";
import { Route, Routes } from "react-router-dom";
import Userlayout from "./Userpage/Userlayout";
import Adminlayout from "./Adminpage/Adminlayout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Userlayout />} />
        <Route path="/admin/*" element={<Adminlayout />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./search2/Navbar.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;

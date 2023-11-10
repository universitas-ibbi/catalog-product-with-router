import Navbar from "./Navbar.jsx";

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container p-3">
        <Outlet />
      </div>
    </>
  );
}

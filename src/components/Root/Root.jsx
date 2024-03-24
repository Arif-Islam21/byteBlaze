import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h2 className="text-4xl"> footer here</h2>
    </div>
  );
};

export default Root;

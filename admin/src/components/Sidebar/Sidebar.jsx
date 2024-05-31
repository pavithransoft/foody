import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { CiCirclePlus, CiViewList, CiBoxes } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <CiCirclePlus className="sidebar-option-icon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <CiViewList className="sidebar-option-icon" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <CiBoxes className="sidebar-option-icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

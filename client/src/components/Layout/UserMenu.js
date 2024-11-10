import React from "react";
import { NavLink, Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Menu</h4>
          <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
            Profile
          </NavLink>
          <NavLink to="/dashboard/users/orders" className="list-group-item list-group-item-action">
           Orders
          </NavLink>
          
        </div>
      </div>
    </>
  );
};

export default UserMenu;
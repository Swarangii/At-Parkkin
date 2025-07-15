import React from "react";

const Header = () => {
  return (
    <div className="header-vender">
      <div className="header-left-vender">
        <div className="search-container-vender">
          <input
            type="text"
            placeholder="Search..."
            className="search-input-vender"
          />
          <span className="search-icon-vender">🔍</span>
        </div>
        <select className="filter-dropdown-vender">
          <option>All spaces</option>
          <option>Available</option>
          <option>Occupied</option>
          <option>Reserved</option>
        </select>
      </div>

      <div className="header-right-vender">
        <button className="active-btn-vender">Active</button>
        <button className="edit-profile-btn-vender">✏️ Edit Profile</button>
        <div className="admin-info-vender">
          <span className="admin-label-vender">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

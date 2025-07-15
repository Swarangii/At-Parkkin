import React from "react";

const AdminProfile = () => {
  return (
    <div className="admin-profile-vender">
      <div className="admin-header-vender">
        <span>Admin user</span>
        <button className="edit-btn-vender">✏️</button>
      </div>

      <div className="admin-details-vender">
        <div className="admin-avatar-vender">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
            alt="Admin"
          />
        </div>
        <div className="admin-info-vender">
          <h4>Mike hales</h4>
          <p>Mike.hales@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

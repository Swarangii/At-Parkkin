import React, { useState } from "react";
import "./Spreadsheet.css";
const Spreadsheet = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2025-01-15",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Manager",
      status: "Inactive",
      lastLogin: "2025-01-10",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2025-01-16",
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-13",
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(filteredData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !filterRole || row.role === filterRole;
    const matchesStatus = !filterStatus || row.status === filterStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleDelete = () => {
    if (
      selectedRows.length > 0 &&
      window.confirm(`Delete ${selectedRows.length} selected rows?`)
    ) {
      setData((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
      setSelectedRows([]);
    }
  };

  const handleExport = () => {
    const csvContent = [
      ["ID", "Name", "Email", "Role", "Status", "Last Login"],
      ...filteredData.map((row) => [
        row.id,
        row.name,
        row.email,
        row.role,
        row.status,
        row.lastLogin,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "admin-data.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="spreadsheet-container-spread">
      <div className="spreadsheet-header-spread">
        <div className="header-content-spread">
          <div className="title-section-spread">
            <h1 className="page-title-spread">Super Admin Spreadsheet</h1>
            <p className="page-subtitle-spread">Manage and analyze your data</p>
          </div>
          <div className="header-actions-spread">
            <button
              className="btn-spread btn-secondary-spread"
              onClick={handleExport}
            >
              Export CSV
            </button>
            <button className="btn-spread btn-primary-spread">
              Add New Record
            </button>
          </div>
        </div>
      </div>

      <div className="spreadsheet-content-spread">
        <div className="controls-section-spread">
          <div className="search-controls-spread">
            <input
              type="text"
              placeholder="Search by name or email..."
              className="search-input-spread"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-controls-spread">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="filter-select-spread"
            >
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select-spread"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {selectedRows.length > 0 && (
            <div className="bulk-actions-spread">
              <span className="selected-count-spread">
                {selectedRows.length} selected
              </span>
              <button
                className="btn-spread btn-danger-spread"
                onClick={handleDelete}
              >
                Delete Selected
              </button>
            </div>
          )}
        </div>

        <div className="table-container-spread">
          <table className="data-table-spread">
            <thead>
              <tr>
                <th className="checkbox-column-spread">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      selectedRows.length === filteredData.length &&
                      filteredData.length > 0
                    }
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr
                  key={row.id}
                  className={selectedRows.includes(row.id) ? "selected" : ""}
                >
                  <td className="checkbox-column-spread">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                    />
                  </td>
                  <td>{row.id}</td>
                  <td className="name-cell-spread">{row.name}</td>
                  <td>{row.email}</td>
                  <td>
                    <span
                      className={`role-badge-spread role-spread${row.role.toLowerCase()}`}
                    >
                      {row.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`status-badge-spread status-spread${row.status.toLowerCase()}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td>{row.lastLogin}</td>
                  <td>
                    <div className="action-buttons-spread">
                      <button className="btn-icon-spread edit-spread">
                        ✏️
                      </button>
                      <button className="btn-icon-spread delete-spread">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer-spread">
          <div className="table-info-spread">
            Showing {filteredData.length} of {data.length} records
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spreadsheet;

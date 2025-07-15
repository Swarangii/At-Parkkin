import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VenderDashboard from "./pages/VenderDashboard/venderdashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard/superadmindash";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ParkingPartners from "./pages/Dashboard/Features/ParkingPartners/parkingPartners";
import ParkingZones from "./pages/Dashboard/Features/ParkingZones/parkingZone";
import MapPage from "./pages/Dashboard/Features/ParkingZones/mapPage";
import Vehicles from "./pages/Dashboard/Features/Vehicles/Vehicles";
import PoliceOfficers from "./pages/Dashboard/Features/PoliceOfficers/PoliceOfficers";
import Community from "./pages/Dashboard/Features/Community/Community";
import Complaint from "./pages/Dashboard/Features/Complaint/Complaint";
import Payment from "./pages/Dashboard/Features/Payment/Payment";
import Report from "./pages/Dashboard/Features/Report/Report";
import UserManage from "./pages/VenderDashboard/Features-Vender/User-Manage-Reports/UserManage";
import NearByPlaces from "./pages/Dashboard/Features/NearByPlaces/NearByPlaces";
import UserSettings from "./pages/Dashboard/Features/UserSettings/UserSettings";
import VenSettings from "./pages/VenderDashboard/Features-Vender/VenSettings/VenSettings";
import UserInfo from "./pages/VenderDashboard/Features-Vender/Users-Info/UserInfo";
import UserHome from "./pages/VenderDashboard/Features-Vender/Users-Info/UserHome";
import Spreadsheet from "./pages/SuperAdminDashboard/Features/Spreadsheet/Spreadsheet";
import SettingsAdmin from "./pages/SuperAdminDashboard/Features/Setting-admin/SettingsAdmin";
import Sales from "./pages/SuperAdminDashboard/Features/Sales/Sales";
import Schedule from "./pages/SuperAdminDashboard/Features/Schedule/Schedule";
import Message from "./pages/SuperAdminDashboard/Features/Message/Message";
import Library from "./pages/SuperAdminDashboard/Features/Library/Library";
import Support from "./pages/SuperAdminDashboard/Features/Support/Support";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/venderdashboard" element={<VenderDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
        <Route
          path="/login"
          element={
            <SignIn routing="path" path="/login" redirectUrl="/dashboard" />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp routing="path" path="/signup" redirectUrl="/dashboard" />
          }
        />
        <Route path="/parkingpartners" element={<ParkingPartners />} />
        <Route path="/parkingzones" element={<ParkingZones />} />
        <Route path="/mappage" element={<MapPage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/police-officer" element={<PoliceOfficers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/report" element={<Report />} />
        <Route path="/vendor-report" element={<UserManage />} />
        <Route path="/near-by-places" element={<NearByPlaces />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/vendor-settings" element={<VenSettings />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/user-detail" element={<UserHome />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
        <Route path="/settings-admin" element={<SettingsAdmin />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/message" element={<Message />} />
        <Route path="/library" element={<Library />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;

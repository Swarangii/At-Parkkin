// import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import "./Auth.css";
// function Signup() {
//   return (
//     <>
//       <Navbar />
//       <div className="auth-container">
//         <h2>Sign Up</h2>
//         <form className="auth-form">
// <select name="role" required>
//   <option value="role" disabled selected>
//     I'm a...
//   </option>
//   <option value="role">User</option>
//   <option value="role">Vendor</option>
//   <option value="role">Admin</option>
// </select>
//           <input type="text" placeholder="Full Name" required />
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Sign Up</button>
//         </form>
//         <p>
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Signup;

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

// export default function Signup() {
//   return (
//     <header>
//       <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
//   );
// }

// Signup.jsx
import { SignedIn, SignedOut, SignUp, UserButton } from "@clerk/clerk-react";
import "./Auth.css";
export default function Signup() {
  return (
    <header className="main">
      <SignedOut>
        <SignUp path="/signup" routing="path" signInUrl="/login" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

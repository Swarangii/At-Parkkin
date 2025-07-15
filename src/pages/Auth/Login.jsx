// import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import "./Auth.css";
// import { useNavigate } from "react-router-dom";

// function Login({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Later add actual login logic
//     setIsLoggedIn(true);
//     navigate("/dashboard");
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="auth-container">
//         <h2>Login</h2>
//         <form className="auth-form">
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button onClick={handleLogin} type="submit">
//             Login
//           </button>
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign up</a>
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Login;

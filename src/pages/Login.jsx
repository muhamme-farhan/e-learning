// // import { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // export default function Login() {
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));

// //     // Clear error on change
// //     if (errors[name]) {
// //       setErrors((prev) => ({
// //         ...prev,
// //         [name]: "",
// //       }));
// //     }
// //   };

// //   const validate = () => {
// //     const newErrors = {};

// //     if (!formData.email.trim()) newErrors.email = "Email is required";
// //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
// //       newErrors.email = "Invalid email address";

// //     if (!formData.password) newErrors.password = "Password is required";
// //     else if (formData.password.length < 6)
// //       newErrors.password = "Password must be at least 6 characters";

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     if (!validate()) return;

// //     setIsSubmitting(true);
// //     try {
// //       await new Promise(resolve => setTimeout(resolve, 1000));
// //       alert("Login successful! Redirecting to home page...");
// //       navigate("/");
// //     // eslint-disable-next-line no-unused-vars
// //     } catch (error) {
// //       alert("Login failed. Please try again.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-vh-100 d-flex align-items-center bg-light">
// //       <div className="container py-5">
// //         <div className="row justify-content-center">
// //           <div className="col-md-8 col-lg-6">
// //             <div className="card shadow-lg">
// //               <div className="row g-0">
// //                 {/* Left Side - Illustration */}
// //                 <div className="col-md-6 d-none d-md-block bg-primary text-white p-5">
// //                   <div className="h-100 d-flex flex-column justify-content-center">
// //                     <h2 className="mb-4">Welcome Back!</h2>
// //                     <p className="mb-4">Login to continue learning and track your progress.</p>
// //                     <div className="text-center mt-4">
// //                       <img
// //                         src="https://images.unsplash.com/photo-1581090700227-1e8e96de5e2a?auto=format&fit=crop&w=500&q=60"
// //                         alt="Login illustration"
// //                         className="img-fluid rounded"
// //                       />
// //                     </div>
// //                     <div className="mt-auto text-center">
// //                       <p className="mb-0">Don't have an account?</p>
// //                       <Link to="/signup" className="btn btn-outline-light btn-sm mt-2">
// //                         Signup here
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Right Side - Form */}
// //                 <div className="col-md-6">
// //                   <div className="card-body p-5">
// //                     <div className="text-center mb-4">
// //                       <h2 className="fw-bold text-primary">Login</h2>
// //                       <p className="text-muted">Enter your credentials to access your account</p>
// //                     </div>

// //                     <form onSubmit={handleLogin} noValidate>
// //                       <div className="mb-3">
// //                         <label htmlFor="email" className="form-label">Email</label>
// //                         <input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           className={`form-control ${errors.email ? "is-invalid" : ""}`}
// //                           placeholder="Enter email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                         />
// //                         {errors.email && (
// //                           <div className="invalid-feedback">{errors.email}</div>
// //                         )}
// //                       </div>

// //                       <div className="mb-4">
// //                         <label htmlFor="password" className="form-label">Password</label>
// //                         <input
// //                           id="password"
// //                           name="password"
// //                           type="password"
// //                           className={`form-control ${errors.password ? "is-invalid" : ""}`}
// //                           placeholder="Enter password"
// //                           value={formData.password}
// //                           onChange={handleChange}
// //                         />
// //                         {errors.password && (
// //                           <div className="invalid-feedback">{errors.password}</div>
// //                         )}
// //                       </div>

// //                       <button
// //                         type="submit"
// //                         className="btn btn-primary w-100 py-2 mb-3"
// //                         disabled={isSubmitting || !formData.email || !formData.password}
// //                       >
// //                         {isSubmitting ? (
// //                           <>
// //                             <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
// //                             Logging in...
// //                           </>
// //                         ) : (
// //                           "Login"
// //                         )}
// //                       </button>

// //                       <div className="text-center mt-3">
// //                         <p className="small text-muted">
// //                           Forgot your password? <a href="#">Reset here</a>
// //                         </p>
// //                       </div>
// //                     </form>

// //                     <div className="text-center mt-4 d-md-none">
// //                       <p className="mb-0">Don't have an account? <Link to="/signup">Signup</Link></p>
// //                     </div>
// //                   </div>
// //                 </div>

// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (validateForm()) {
//   //     setIsLoading(true);
      
//   //     // Simulate API call
//   //     setTimeout(() => {
//   //       console.log('Login successful', formData);
//   //       setIsLoading(false);
//   //       navigate("/"); // Redirect to home on success
//   //     }, 1500);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
    
//   e.preventDefault();
//   if (!validateForm()) return;

//   setIsLoading(true);

//   try {
//     const response = await fetch("http://localhost:8000/api/login/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       // body: JSON.stringify(formData),
//       body: JSON.stringify({
//   email: formData.email,
//   password: formData.password,
// }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       localStorage.setItem("token", data.access);  // save token
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   // eslint-disable-next-line no-unused-vars
//   } catch (err) {
//     alert("Login failed");
//   } finally {
//     setIsLoading(false);
//   }
// };


//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-4">
//           <div className="card shadow-sm">
//             <div className="card-body p-4">
//               <div className="text-center mb-4">
//                 <h2 className="text-primary">Welcome Back</h2>
//                 <p className="text-muted">Please login to your account</p>
//               </div>
              
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">Email address</label>
//                   <input
//                     type="email"
//                     className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                   />
//                   {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
                
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                   />
//                   {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
                
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="rememberMe"
//                     />
//                     <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//                   </div>
//                   <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="btn btn-primary w-100 py-2"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                       Logging in...
//                     </>
//                   ) : 'Login'}
//                 </button>
//               </form>
              
//               <div className="text-center mt-3">
//                 <p className="text-muted">Don't have an account? <a href="Signup" className="text-decoration-none">Sign up</a></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.access);
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);  // 🔥 Update parent state
        navigate("/");        // ✅ Redirect to Home
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <h2 className="text-primary">Welcome Back</h2>
                <p className="text-muted">Please login to your account</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : 'Login'}
                </button>
              </form>

              <div className="text-center mt-3">
                <p className="text-muted">
                  Don't have an account? <a href="/signup" className="text-decoration-none">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

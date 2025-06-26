// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Signup() {
//   const navigate = useNavigate();

//   // Form state
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

  

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error on change
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.username.trim()) newErrors.username = "Username is required";
//     else if (formData.username.length < 3) newErrors.username = "Username must be at least 3 characters";

//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
//       newErrors.email = "Invalid email address";

//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setIsSubmitting(true);

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       alert("Signup successful! Redirecting to home page...");
//     navigate("/login"); // instead of "/"
// // Redirect to home page
//     // eslint-disable-next-line no-unused-vars
//     } catch (error) {
//       alert("Signup failed. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-vh-100 d-flex align-items-center bg-light">
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-md-8 col-lg-6">
//             <div className="card shadow-lg">
//               <div className="row g-0">
//                 {/* Left side - Illustration */}
//                 <div className="col-md-6 d-none d-md-block bg-primary text-white p-5">
//                   <div className="h-100 d-flex flex-column justify-content-center">
//                     <h2 className="mb-4">Join Our Community</h2>
//                     <p className="mb-4">
//                       Sign up to access our premium courses and start your learning journey today.
//                     </p>
//                     <div className="text-center mt-4">
//                       <img 
//                         src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
//                         alt="Learning illustration" 
//                         className="img-fluid rounded"
//                       />
//                     </div>
//                     <div className="mt-auto text-center">
//                       <p className="mb-0">Already have an account?</p>
//                       <Link to="/login" className="btn btn-outline-light btn-sm mt-2">
//                         Login here
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right side - Form */}
//                 <div className="col-md-6">
//                   <div className="card-body p-5">
//                     <div className="text-center mb-4">
//                       <h2 className="fw-bold text-primary">Create Account</h2>
//                       <p className="text-muted">Fill in your details to get started</p>
//                     </div>

//                     <form onSubmit={handleSignup} noValidate>
//                       <div className="mb-3">
//                         <label htmlFor="username" className="form-label">Username</label>
//                         <input
//                           id="username"
//                           name="username"
//                           type="text"
//                           className={`form-control ${errors.username ? "is-invalid" : ""}`}
//                           placeholder="Enter username"
//                           value={formData.username}
//                           onChange={handleChange}
//                         />
//                         {errors.username && (
//                           <div className="invalid-feedback">{errors.username}</div>
//                         )}
//                       </div>

//                       <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                           placeholder="Enter email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                         {errors.email && (
//                           <div className="invalid-feedback">{errors.email}</div>
//                         )}
//                       </div>

//                       <div className="mb-4">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input
//                           id="password"
//                           name="password"
//                           type="password"
//                           className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                           placeholder="Enter password (min 6 chars)"
//                           value={formData.password}
//                           onChange={handleChange}
//                         />
//                         {errors.password && (
//                           <div className="invalid-feedback">{errors.password}</div>
//                         )}
//                       </div>

//                       <button
//                         type="submit"
//                         className="btn btn-primary w-100 py-2 mb-3"
//                         disabled={isSubmitting || !formData.username || !formData.email || !formData.password}
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                             Creating account...
//                           </>
//                         ) : (
//                           "Sign Up"
//                         )}
//                       </button>

//                       <div className="text-center mt-3">
//                         <p className="small text-muted">
//                           By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
//                         </p>
//                       </div>
//                     </form>

//                     <div className="text-center mt-4 d-md-none">
//                       <p className="mb-0">Already have an account? <Link to="/login">Login</Link></p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    else if (formData.username.length < 3) newErrors.username = "Username must be at least 3 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        // Handle backend validation errors
        if (data.errors) {
          setErrors(data.errors);
        } else {
          alert(data.error || data.message || "Signup failed.");
        }
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg">
              <div className="row g-0">
                {/* Left side - Illustration */}
                <div className="col-md-6 d-none d-md-block bg-primary text-white p-5">
                  <div className="h-100 d-flex flex-column justify-content-center">
                    <h2 className="mb-4">Join Our Community</h2>
                    <p className="mb-4">
                      Sign up to access our premium courses and start your learning journey today.
                    </p>
                    <div className="text-center mt-4">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                        alt="Learning illustration" 
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="mt-auto text-center">
                      <p className="mb-0">Already have an account?</p>
                      <Link to="/login" className="btn btn-outline-light btn-sm mt-2">
                        Login here
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="col-md-6">
                  <div className="card-body p-5">
                    <div className="text-center mb-4">
                      <h2 className="fw-bold text-primary">Create Account</h2>
                      <p className="text-muted">Fill in your details to get started</p>
                    </div>

                    <form onSubmit={handleSignup} noValidate>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          className={`form-control ${errors.username ? "is-invalid" : ""}`}
                          placeholder="Enter username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        {errors.username && (
                          <div className="invalid-feedback">{errors.username}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          placeholder="Enter password (min 6 chars)"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 mb-3"
                        disabled={isSubmitting || !formData.username || !formData.email || !formData.password}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Creating account...
                          </>
                        ) : (
                          "Sign Up"
                        )}
                      </button>

                      <div className="text-center mt-3">
                        <p className="small text-muted">
                          By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                        </p>
                      </div>
                    </form>

                    <div className="text-center mt-4 d-md-none">
                      <p className="mb-0">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


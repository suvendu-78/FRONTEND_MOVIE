import { useState, useRef, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [Info, setInfo] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const Passwordref = useRef();
  const Nameref = useRef();
  const Emailref = useRef();
  const Mobileref = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      Name: Nameref.current.value.trim(),
      Email: Emailref.current.value.trim(),
      Password: Passwordref.current.value.trim(),
      Mob: Mobileref.current.value.trim(),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/admin/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        },
      );

      if (response.ok) {
        toast.success("Signup successful");
        navigate("/fileupload");
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setInfo(info);
    Nameref.current.value = "";
    Emailref.current.value = "";
    Passwordref.current.value = "";
    Mobileref.current.value = "";
    // console.log(info);
  };
  console.log(Info);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      const googleUser = {
        Name: decoded.name,
        Email: decoded.email,
        Image: decoded.picture,
      };

      const response = await fetch(
        "http://localhost:8000/api/v1/user/google-signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googleUser),
        },
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("✅ Google Signup Successful");
        setTimeout(() => navigate("/about"), 2000);
      } else {
        toast.error(result.message || "Google signup failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Google login failed");
    }
  };

  const handleGoogleError = () => {
    toast.error("Google SignIn Failed");
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-gray-900 p-10 rounded-lg w-[400px]">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-3 rounded bg-gray-800 text-white outline-none"
              ref={Nameref}
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded bg-gray-800 text-white outline-none"
              ref={Emailref}
              required
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              className="p-3 rounded bg-gray-800 text-white outline-none"
              ref={Mobileref}
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="p-3 rounded bg-gray-800 text-white outline-none w-full"
                ref={Passwordref}
                required
              />

              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded font-semibold"
            >
              Create Account
            </button>
          </form>
          <h1 className="text-center text-white">-------- OR --------</h1>
          <div className="mt-4 flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>

          <p className="text-gray-400 text-sm mt-4 text-center">
            Already have an account?
            <NavLink to="/login">
              <span className="text-red-500 ml-1 cursor-pointer"> Login</span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

// import { useState, useRef } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const [Info, setInfo] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // ⭐ loader state

//   const Passwordref = useRef();
//   const Nameref = useRef();
//   const Emailref = useRef();
//   const Mobileref = useRef();

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true); // ⭐ start loader

//     const info = {
//       Name: Nameref.current.value.trim(),
//       Email: Emailref.current.value.trim(),
//       Password: Passwordref.current.value.trim(),
//       Mob: Mobileref.current.value.trim(),
//     };

//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/v1/admin/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(info),
//         },
//       );

//       if (response.ok) {
//         toast.success("Signup successful");
//         navigate("/fileupload");
//       } else {
//         const data = await response.json();
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Signup failed");
//     }

//     setLoading(false); // ⭐ stop loader

//     setInfo(info);
//     Nameref.current.value = "";
//     Emailref.current.value = "";
//     Passwordref.current.value = "";
//     Mobileref.current.value = "";
//   };

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);

//       const googleUser = {
//         Name: decoded.name,
//         Email: decoded.email,
//         Image: decoded.picture,
//       };

//       const response = await fetch(
//         "http://localhost:8000/api/v1/user/google-signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(googleUser),
//         },
//       );

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("✅ Google Signup Successful");
//         setTimeout(() => navigate("/about"), 2000);
//       } else {
//         toast.error(result.message || "Google signup failed");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Google login failed");
//     }
//   };

//   const handleGoogleError = () => {
//     toast.error("Google SignIn Failed");
//   };

//   return (
//     <>
//       <ToastContainer />

//       <div className="min-h-screen flex items-center justify-center bg-black">
//         <div className="bg-gray-900 p-10 rounded-lg w-[400px]">
//           <h2 className="text-white text-3xl font-bold mb-6 text-center">
//             Sign Up
//           </h2>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="p-3 rounded bg-gray-800 text-white outline-none"
//               ref={Nameref}
//               required
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               className="p-3 rounded bg-gray-800 text-white outline-none"
//               ref={Emailref}
//               required
//             />

//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               className="p-3 rounded bg-gray-800 text-white outline-none"
//               ref={Mobileref}
//               required
//             />

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="p-3 rounded bg-gray-800 text-white outline-none w-full"
//                 ref={Passwordref}
//                 required
//               />

//               <span
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {/* ⭐ Updated Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-red-600 hover:bg-red-700 text-white p-3 rounded font-semibold flex justify-center items-center gap-2"
//             >
//               {loading && (
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               )}
//               {loading ? "Creating..." : "Create Account"}
//             </button>
//           </form>

//           <h1 className="text-center text-white mt-4">-------- OR --------</h1>

//           {/* ⭐ Google Part Same */}
//           <div className="mt-4 flex justify-center">
//             <GoogleLogin
//               onSuccess={handleGoogleSuccess}
//               onError={handleGoogleError}
//             />
//           </div>

//           <p className="text-gray-400 text-sm mt-4 text-center">
//             Already have an account?
//             <NavLink to="/login">
//               <span className="text-red-500 ml-1 cursor-pointer"> Login</span>
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const EmailMobileref = useRef();
  const Passwordref = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [Info, setInfo] = useState({});
  const [loading, setLoading] = useState(false); // loader state
  const [message, setMessage] = useState(""); // success message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const info = {
      Email: EmailMobileref.current.value,
      Password: Passwordref.current.value,
    };

    setInfo(info);
    setLoading(true); // start loader

    const url = "http://localhost:8000/api/v1/admin/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        setMessage("Login Successful ✅");
        setTimeout(() => {
          navigate("/fileUpload");
        }, 1500);
      }

      setLoading(false);
      return response;
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-10 rounded-lg w-[400px]">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* Success Message */}
        {message && (
          <p className="text-green-400 text-center mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="p-3 rounded bg-gray-800 text-white outline-none"
            ref={EmailMobileref}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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

          {/* Button with Loader */}
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <NavLink to="/signup">
          <p className="text-gray-400 text-sm mt-4 text-center">
            Don't have an account?
            <span className="text-red-500 ml-1 cursor-pointer"> Sign Up</span>
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;

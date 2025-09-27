import { useState } from "react";
import { FaGoogle, FaGuaraniSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
const Login = () => {
  const { registerUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  // firebase auth logic
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [logIN, setLogIn] = useState(false);
  const handleLogin = () => {
    setLogIn(!logIN);
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      await registerUser(formData.email, formData.password);
      alert("User registered successfully");
    } catch (error) {
      setMessage("Please provide a valid email and password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Google sign in failed!");
      console.error(error);
    }
  };
  return (
    <div className="flex font-primary ">
      <div className="w-full  md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Book_store</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 🙋🏻</h2>
          <p className="text-center mb-6">
            Enter your username and password to login
          </p>

          {!logIN && (
            <>
              <label className="block text-sm font-semibold mb-2">Name</label>

              <input
                className="w-full p-2 border rounded mb-4"
                type="text"
                placeholder="Enter your email addresss"
              />
            </>
          )}
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Enter your email addresss"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Enter your Password"
            />
          </div>

          <button className="bg-black w-full text-white rounded py-2 px-2 font-semibold hover:bg-gray-900 cursor-pointer transition ">
            SignIN
          </button>
          <p onClick={handleLogin} className="mt-6 text-center text-sm mb-6">
            {`${logIN ? "Don't have an Account?" : "Already have an account?"}`}{" "}
            <span className="underline hover:text-blue-600 cursor-pointer">
              {logIN ? "Register" : "login"}
            </span>
          </p>

          <button
            onClick={handleGoogleSignIn}
            className=" flex  items-center justify-center  mx-auto border bg-blue-200 hover:bg-blue-400 cursor-pointer rounded-md py-2 px-2 gap-6 w-full md:w-2/3"
          >
            <FaGoogle className="hover:text-yellow-800" />

            <span className="hover:text-red-500 cursor-pointer">
              Login with Google
            </span>
          </button>
        </form>
      </div>
      {/* Right side */}

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center  items-center">
          <img
            src="https://ncetir.com/Images/login@4x.png"
            alt="Login to account"
            className=" object-cover w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

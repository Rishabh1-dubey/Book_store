import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // clear old message

    try {
      const res = await fetch("http://localhost:5000/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      // Save token to localStorage (or context)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful ✅");
      navigate("/admin-dashboard"); // redirect after login
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <div className="flex font-primary">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Book_store</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            Admin Login 👨🏻‍💻
          </h2>

          {message && (
            <p className="text-center text-red-500 mb-4">{message}</p>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Username</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black w-full text-white rounded py-2 px-2 font-semibold hover:bg-gray-900 cursor-pointer transition"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Right side */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src="https://ncetir.com/Images/login@4x.png"
            alt="Login to account"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

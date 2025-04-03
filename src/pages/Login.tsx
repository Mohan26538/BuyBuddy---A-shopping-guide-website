import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      axios.post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log("Login response:", result);
        if (result.data === "success") {
          navigate("/home");
          alert("Login successful");
        } else {
          alert(result.data);
        }
      })
      .catch((err) => {
        console.error("Login error:", err.response ? err.response.data : err.message);
        alert("Login failed. Check console for details.");
      });
    }    
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
  
          <form className="space-y-4"
          onSubmit={handleSubmit}
          >

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
           
            
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
  
           <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
        </div>
      </div>
    );

};

export default Login;
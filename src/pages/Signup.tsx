import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      try {
        const response = await axios.post('http://localhost:5000/register', {
          name, email, phonenumber, password
        });
        navigate('/login')
        console.log("User Registered:", response.data);
        alert("Signup Successful!");
      } catch (error: any) {
        console.error("Signup Error:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Internal Server Error");
      }
    };

   

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" 
        onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />


         <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    );

};

export default Signup;
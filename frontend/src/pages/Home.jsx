import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-300 to-teal-500">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
      <p className="text-lg font-semibold text-gray-600 mt-4">Select a role to continue</p>
      <div className="mt-6 flex space-x-4">
        <button onClick={() => navigate("/home/recruiter")} className="p-10 bg-blue-500 text-white font-semibold rounded">
          Recruiter
        </button>
        <button onClick={() => navigate("/home/developer")} className="p-10 bg-green-500 text-white rounded">
          Developer
        </button>
        <button onClick={() => navigate("/home/stalker")} className="p-10 bg-red-500 text-white rounded">
          Stalker
        </button>
        <button onClick={() => navigate("/home/explorer")} className="p-10 bg-yellow-500 text-white rounded">
          Explorer
        </button>
      </div>
    </div>
  );
}

export default Home;

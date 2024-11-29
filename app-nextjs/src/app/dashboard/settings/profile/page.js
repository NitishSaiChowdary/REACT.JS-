"use client"
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile updated:", { name, email });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      
      {/* Profile Settings Form */}
      <form onSubmit={handleProfileUpdate} className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;

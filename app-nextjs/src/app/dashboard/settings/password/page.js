"use client"

import { useState } from "react";

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log("Password changed:", { currentPassword, newPassword, confirmPassword });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>
      
      {/* Password Change Form */}
      <form onSubmit={handlePasswordChange} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;

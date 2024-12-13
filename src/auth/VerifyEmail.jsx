import React, { useState, useRef } from "react";
import AuthNav from "./AuthNav";

const VerifyEmail = () => {
  const [password, setPassword] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (value, index) => {
    if (!/^[0-9a-zA-Z]*$/.test(value)) return; // Allow only alphanumeric input
    const updatedPassword = [...password];
    updatedPassword[index] = value.slice(-1); // Ensure only one character is added
    setPassword(updatedPassword);

    // Automatically focus on the next input box if the value is not empty
    if (value && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !password[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const fullPassword = password.join("");
    if (fullPassword.length !== 5) {
      setMessage("Please enter the complete password.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: fullPassword }),
      });

      if (!response.ok) {
        throw new Error("Invalid password. Please try again.");
      }

      const data = await response.json();

      if (data.success) {
        setMessage("Password verified successfully!");
      } else {
        throw new Error(data.message || "Verification failed.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <AuthNav />

      <div className="fixed inset-0 bg-[#9FE19F] bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">
            Verify Email
          </h2>
          <p className="text-gray-600 text-sm text-center mb-4">
            Enter the 5-character password sent to your email:
          </p>
          <div className="flex justify-center space-x-2 mb-4">
            {password.map((value, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            disabled={isLoading}
            className={`w-full py-2 text-white rounded-md ${
              isLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

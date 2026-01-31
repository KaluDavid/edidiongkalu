"use client";
import { Lock, X } from "lucide-react";
import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";

type FN = {
  onSuccess: () => void;
};

export const PasswordModal = ({ onSuccess }: FN) => {
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_PROJECT_3_CODE;

  const handleSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setError("");
      onSuccess();
    } else {
      setError("Incorrect password. Please try again.");
      setIsShaking(true);
      setPassword("");
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border-3 ${
          isShaking ? "animate-shake" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Lock Icon */}
          <div className="w-16 h-16 rounded-full bg-cm-yellow flex items-center justify-center">
            <Lock className="w-8 h-8 text-text-color" />
          </div>

          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Protected Project</h2>
            <p className="text-gray-600">
              This project is password protected. Please enter the password to
              continue.
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full space-y-4">
            <div>
              <div className="flex w-full items-center relative">
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-cm-yellow transition-colors"
                  autoFocus
                />

                {showPwd ? (
                  <FaEye
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-4 cursor-pointer"
                  />
                ) : (
                  <BsEyeSlashFill
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-4  cursor-pointer"
                  />
                )}
              </div>{" "}
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  {error}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-cm-yellow hover:bg-cm-yellow/90 text-text-color font-semibold py-3 rounded-lg transition-colors border-2 border-black cursor-pointer"
            >
              Unlock Project
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

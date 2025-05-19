import React, { useState } from "react";
import { donate } from "./services/donationService";

const App = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDonate = async () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
    await donate("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", amount, message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#7e22ce] flex items-center justify-center px-4 text-white font-sans">
      <div className="bg-[#1e1b4b] bg-opacity-90 p-10 rounded-3xl shadow-xl w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
          <span>💜</span> Donate to Creator
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 rounded-lg bg-[#312e81] placeholder-gray-300 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
          />

          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-lg bg-[#312e81] placeholder-gray-300 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
          />

          <button
            onClick={handleDonate}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-white font-semibold rounded-xl shadow-md hover:shadow-lg"
          >
            🚀 Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

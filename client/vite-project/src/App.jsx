import React, { useState } from "react";
import { donate } from "./services/donationService";
import './App.css';  // Ensure this is included to apply styles

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
    <div className="container">
      <div className="card">
        <h1>
          Micro Crypto Donation App
        </h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={handleDonate}>
            🚀 Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

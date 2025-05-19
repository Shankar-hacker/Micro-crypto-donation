# 💸 Micro Crypto Donation Platform

A **decentralized platform** that enables users to send **micro crypto donations** (ETH) to their favorite content creators, developers, or open-source heroes — all on the blockchain. 🔗✨

---

## 🚀 Features

✅ Connect MetaMask wallet  
💰 Donate ETH securely via a smart contract  
📄 Transparent donation history (on-chain)  
🎨 Sleek frontend built with React + Tailwind  
🔐 Solidity-based secure donation contract  

---

## 🧰 Tech Stack

| Layer        | Technology                               |
|--------------|------------------------------------------|
| 🌐 Frontend  | React.js + Vite + Tailwind CSS + Ethers.js |
| 🔒 Contract  | Solidity with Hardhat                    |
| ⚙️ Blockchain | Ethereum (Local via Hardhat Node)        |

---

## ⚙️ How to Run the Project

### 🛠 Backend – Smart Contract Setup

1. Clone the repo and navigate to the main folder:

```bash
cd micro-crypto-donation-complete
```

2. Install dependencies & setup Hardhat:

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox ethers
```
⚠️ Note: If you get a deprecation warning like glob@8.1.0, it's safe to ignore for local testing.

3. Compile your smart contract:

```bash
npx hardhat compile
```

4. Run the local Hardhat Ethereum node:

```bash
npx hardhat node
```
5. Open a new terminal tab and deploy the contract:

```bash
npx hardhat run scripts/deploy.js --network localhost
```
✅ Note the deployed contract address! You’ll need it in the frontend.

### 💻 Frontend – React DApp Setup ###

1. Go to the frontend directory:

```bash
cd client
```

2. Create the project with Vite (if not already created):

```bash
npm create vite@latest
# Choose: React + JavaScript
```

3. Install frontend dependencies:

```bash
npm install
npm install ethers
```

4. Run the development server:

```bash
npm run dev
```
🌐 Visit: http://localhost:5173

### 🔗 Connect MetaMask to Hardhat Network ###

1. Open MetaMask

2. Add a Custom Network:


| Field            | Value                     |
|------------------|---------------------------|
| **Network Name** | Hardhat Localhost         |
| **RPC URL**      | http://127.0.0.1:8545     |
| **Chain ID**     | 31337                     |
| **Currency Symbol** | ETH                   |


Import one of the private keys from your Hardhat terminal output (for testing)

### 📝 Configuration Notes ###

1. 🔁 Update the contract address in:

```bash
client/src/services/donationService.js
```

2. Replace this line:

```bash
const contractAddress = "0xYourDeployedContractAddressHere";
```

3. 📦 Ensure ABI JSON file is available at:

```bash
client/src/artifacts/MicroDonation.json
```
This ABI is needed for interacting with the smart contract from your frontend.

### 📸 Screenshots: ###




### 🙌 Contributions ###

Want to improve this? Add creator profiles, tipping for GitHub commits, MATIC support, or even a leaderboard!
Fork the repo, build cool stuff, and submit a PR. 🤝

### 🧠 License ###
MIT © [Sankar Paikira]

💡 Happy Hacking & Keep Donating the Web3 Way! 💖🌍

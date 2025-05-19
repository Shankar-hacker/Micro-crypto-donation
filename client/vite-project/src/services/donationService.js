import { ethers } from "ethers";
import DonationABI from "../artifacts/MicroDonation.json"; // Ensure ABI is here

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const donate = async (creator, amount, message) => {
  if (!window.ethereum) return alert("Install MetaMask");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, DonationABI.abi, signer);

  const value = ethers.parseEther(amount);
  const tx = await contract.donate(creator, message, { value });
  await tx.wait();
};

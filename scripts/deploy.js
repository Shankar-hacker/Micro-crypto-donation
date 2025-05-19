const hre = require("hardhat");

async function main() {
  console.log("Deploying MicroDonation...");

  const Donation = await hre.ethers.getContractFactory("MicroDonation");
  const donation = await Donation.deploy();

  // Wait for the contract to be mined
  await donation.waitForDeployment();

  // Get the address
  const address = await donation.getAddress();
  console.log("Contract deployed to:", address);
}

main().catch((error) => {
  console.error("Deployment error:", error);
  process.exitCode = 1;
});

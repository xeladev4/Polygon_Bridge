const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS, BRIDGE_ADDRESS } = process.env;

async function main() {
  const XelaNFT = await hre.ethers.getContractFactory("XelaNFT");
  const xelaNFT = XelaNFT.attach(CONTRACT_ADDRESS);

  const balance = await xelaNFT.balanceOf(BRIDGE_ADDRESS); // Use BRIDGE_ADDRESS after successful bridging
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
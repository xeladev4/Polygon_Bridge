const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const XelaNFT = await hre.ethers.getContractFactory("XelaNFT");
  const xelaNFT = await XelaNFT.attach(CONTRACT_ADDRESS);

  const balance = await xelaNFT.balanceOf(ACCOUNT_ADDRESS); // Use BRIDGE_ADDRESS after successful bridging
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
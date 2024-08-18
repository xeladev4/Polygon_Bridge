const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, BRIDGE_ADDRESS } = process.env;

async function main() {
  const XelaNFT = await hre.ethers.getContractFactory("XelaNFT");
  const xelaNFT = XelaNFT.attach(BRIDGE_ADDRESS);

  const balance = await xelaNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
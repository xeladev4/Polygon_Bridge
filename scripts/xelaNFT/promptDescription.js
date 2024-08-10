const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const XelaNFT = await hre.ethers.getContractFactory("XelaNFT");
  const xelaNFT = XelaNFT.attach(CONTRACT_ADDRESS);

  console.log(await xelaNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
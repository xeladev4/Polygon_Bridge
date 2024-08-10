const hre = require("hardhat");

async function main() {
  const xelaNFT = await hre.ethers.deployContract("XelaNFT");

  console.log("XelaNFT address:", await xelaNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
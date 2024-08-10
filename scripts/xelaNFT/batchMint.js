const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const XelaNFT = await hre.ethers.getContractFactory("XelaNFT");
  const xelaNFT = XelaNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await xelaNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await xelaNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} XelaNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
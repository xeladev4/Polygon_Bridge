# ERC20 Sepolia to Amoy Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC721 tokens from Sepolia to Amoy.

"FxPortalContracts": {
      "FxRoot": "0x0E13EBEdDb8cf9f5987512d5E081FdC2F5b0991e",
      "FxERC20RootTunnel": "0x4B915DC5D123631C53aE619D2222f7124a2143Fa",
      "FxERC721RootTunnel": "0x9E688939Cb5d484e401933D850207D6750852053",
      "FxERC1155RootTunnel": "0x085C505139C3Ec6dD3D285f350f1155cf63Ad7E2"
    }

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key, sepolia api key, amoy api key, account in the .env.example file and rename to .env when finished
3. Run npx hardhat run scripts/xelaNFT/deploy.js --network sepolia to deploy ERC20 contract
4. Paste the newly deployed contract address in the CONTRACT_ADDRESS variable for the scripts
5. Run npx hardhat run scripts/xelaNFT/batchMint.js --network sepolia to mint tokens to your wallet
6. Run npx hardhat run scripts/xelaNFT/promptDescription.js --network sepolia to check the NFT prompt
6. Run npx hardhat run scripts/xelaNFT/approveTransfer.js --network sepolia to approve and deposit your tokens to polygon
7. Wait 20-30ish minutes for tokens to show on polygon account
8. Use [polyscan.com](https://amoy.polygonscan.com/) to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
9. Use this polygon contract address for your getBalance script's tokenAddress
10.Run npx hardhat run scripts/xelaNFT/getBalance.js --network amoy to see the new polygon balance

https://www.loom.com/share/efe638170d394f0a9febc6853b81c371
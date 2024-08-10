// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract XelaNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("XelaNFT", "XNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmVUR5gmBHLKNMJdjKuXAG8uSEw29c7JPdz1vVKj3bSf4Q/";
    }

    function promptDescription() external pure returns (string memory) {
        return "A classic design with wide blue and red stripes, featuring the club's old crest on the chest";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
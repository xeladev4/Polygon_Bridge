// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract XelaNFT is ERC721, ERC721Burnable, ERC721Enumerable, Ownable {
    uint8 public maxSupply = 5;
    uint256 public nextTokenId = 0;

    constructor() ERC721("XelaNFT", "XNFT") {}

    function safeMint(uint8 _quantity) external payable {
        require(nextTokenId + _quantity <= maxSupply, "Exceeds max supply");
        for (uint8 i = 0; i < _quantity; i++) {
            _safeMint(msg.sender, nextTokenId);
            nextTokenId++;
        }
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmVUR5gmBHLKNMJdjKuXAG8uSEw29c7JPdz1vVKj3bSf4Q/";
    }

    function promptDescription() external pure returns (string memory) {
        return "A classic design with wide blue and red stripes, featuring the club's old crest on the chest";
    }

    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
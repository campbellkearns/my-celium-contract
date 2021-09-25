// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SporePortal {
  uint256 totalSpores;

  constructor() {
    console.log("Let's get into it!");
  }

  function depositSpore() public {
    totalSpores += 1;
    console.log("%s has deposited a spore", msg.sender);
  }

  function getTotalSpores() public view returns (uint256) {
    console.log("%d total spores have been deposited!", totalSpores);
    return totalSpores;
  }
}

//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.18;

import "hardhat/console.sol";

contract Greeter {
    string public greeting;
    address public shopAddress = 0xdBe3789d4Ce44D54000678B513a4bcD889aED83F;
    address public customOfficierAddress = 0x7713d929BE30851007d0bd79d3a4bB381Acc62cb;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
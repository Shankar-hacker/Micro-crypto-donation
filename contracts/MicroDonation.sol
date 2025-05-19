// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MicroDonation {
    event DonationReceived(address indexed donor, address indexed creator, uint256 amount, string message);

    function donate(address creator, string memory message) external payable {
        require(msg.value > 0, "Donation must be greater than 0");
        payable(creator).transfer(msg.value);
        emit DonationReceived(msg.sender, creator, msg.value, message);
    }
}

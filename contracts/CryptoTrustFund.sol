// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CryptoTrust {
    address owner;

    event LogWithdrawal(address addr, uint256 amount, uint256 balance);
    event LogFundingAdded(address addr, uint256 amount, uint256 balance);
    event LogFundingAddedToAll(uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    struct Fundee {
        address payable walletAddress;
        string firstName;
        string lastName;
        uint256 releaseTime;
        uint256 balance;
        bool canWithdraw;
    }

    uint256 totalFundees;
    address[] addresses;
    mapping(address => Fundee) fundees;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can add fundees");
        _;
    }

    function addressesLength() public view returns (uint256) {
        return totalFundees;
    }

    function addFundee(
        address payable walletAddress,
        string memory firstName,
        string memory lastName,
        uint256 releaseTime,
        uint256 balance
    ) public onlyOwner {
        fundees[walletAddress] = Fundee(
            walletAddress,
            firstName,
            lastName,
            releaseTime,
            balance,
            false
        );
        totalFundees++;
        addresses.push(walletAddress);
    }

    function balanceOf() public view returns (uint256) {
        return address(this).balance;
    }

    function deposit(address walletAddress) public payable {
        fundees[walletAddress].balance += msg.value;

        emit LogFundingAdded(walletAddress, msg.value, address(this).balance);
    }

    function depositAll() public payable {
        require(totalFundees > 0, "Must have at least one fundee added");
        uint256 shareAmount = msg.value / totalFundees;

        // add split amount to each fundee
        for (uint256 i = 0; i < totalFundees; i++) {
            fundees[addresses[i]].balance += shareAmount;
        }

        emit LogFundingAddedToAll(msg.value);
    }

    function getBalance(address walletAddress) public view returns (uint256) {
        return fundees[walletAddress].balance;
    }

    function canWithdraw(address walletAddress) public returns (bool) {
        Fundee memory fundee = fundees[walletAddress];

        if (block.timestamp > fundee.releaseTime) {
            fundees[walletAddress].canWithdraw = true;
            return true;
        } else {
            return false;
        }
    }

    function removeAddress(address walletAddress) private {
        delete fundees[walletAddress];
        for (uint256 i = 0; i < totalFundees; i++) {
            if (addresses[i] == walletAddress) {
                delete addresses[i];
            }
        }
        totalFundees--;
    }

    function withdraw(address payable walletAddress) public payable {
        Fundee memory fundee = fundees[walletAddress];
        require(
            msg.sender == fundee.walletAddress,
            "You must be the kid to withdraw"
        );
        require(
            fundee.canWithdraw == true,
            "You are not able to withdraw at this time"
        );

        removeAddress(walletAddress);
        fundee.walletAddress.transfer(fundee.balance);
        emit LogWithdrawal(
            walletAddress,
            fundee.balance,
            address(this).balance
        );
    }
}

pragma solidity >=0.5.0;

contract EyedentityRegistry {
    mapping(address => bool) public authorized;

    event EntityRegistered(address indexed entity);

    constructor() public {
        register(msg.sender);
    }

    function register(address _address) public {
        authorized[_address] = true;
        emit EntityRegistered(_address);
    }

    function isAuthorized(address _address) public view returns (bool) {
        return authorized[_address];
    }
}

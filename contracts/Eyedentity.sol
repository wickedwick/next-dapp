pragma solidity >=0.5.0;

contract Eyedentity {
    string private privateKey;
    address private owner;
    string public publicKey;
    string public encryptionPublicKey;
    string public signingPublicKey;
    mapping(address => bool) public authorized;

    event EntityAuthorized(address indexed entity);

    constructor() public {
        privateKey = "";
        publicKey = "";
        owner = msg.sender;
    }

    function setAuthorized(address _address) public {
        require(msg.sender == owner);
        authorized[_address] = true;
        emit EntityAuthorized(_address);
    }

    function isAuthorized(address _address) public view returns (bool) {
        return authorized[_address];
    }

    function setEncryptionPublicKey(string memory _publicKey) public {
        require(msg.sender == owner);
        encryptionPublicKey = _publicKey;
    }

    function setSigningPublicKey(string memory _publicKey) public {
        require(msg.sender == owner);
        signingPublicKey = _publicKey;
    }
}

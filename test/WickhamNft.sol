pragma solidity >=0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/WickhamNft.sol";

contract TestWickhamNft {
    address constant wallet = 0xB2838913C706E4923130667f59F978A681b16887;
    address constant admin = 0x10c29A4E1fbbe68f23402d5786378F62F82D4c40;
    WickhamNft wickhamNft;

    function beforeAll() public {
        wickhamNft = new WickhamNft("", "", "", 10, 100, wallet, admin);
    }

    function testSetTokenURI() public {
        // set base URI
        string memory baseURI = "https://s3.amazonaws.com/wickham-nft/";
    }
}

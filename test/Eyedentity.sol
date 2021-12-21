pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Eyedentity.sol";

contract TestEyedentity {
    address constant senderA = 0xB2838913C706E4923130667f59F978A681b16887;
    address constant senderB = 0x10c29A4E1fbbe68f23402d5786378F62F82D4c40;

    function testIsAuthorized() public {
        Eyedentity eyedentity = new Eyedentity();
        eyedentity.setAuthorized(senderA);
        Assert.equal(
            eyedentity.isAuthorized(senderA),
            true,
            "It should be authorized"
        );

        Assert.equal(
            eyedentity.isAuthorized(senderB),
            false,
            "senderB should not be authorized"
        );
    }
}

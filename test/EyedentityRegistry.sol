pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/EyedentityRegistry.sol";

contract TestEyedentityRegistry {
    address constant senderA = 0xB2838913C706E4923130667f59F978A681b16887;
    address constant senderB = 0x10c29A4E1fbbe68f23402d5786378F62F82D4c40;

    function testIsAuthorized() public {
        EyedentityRegistry eyedentityRegistry = new EyedentityRegistry();
        eyedentityRegistry.register(senderA);
        Assert.equal(
            eyedentityRegistry.isAuthorized(senderA),
            true,
            "senderA should be authorized"
        );

        Assert.equal(
            eyedentityRegistry.isAuthorized(senderB),
            false,
            "senderB should not be authorized"
        );
    }
}

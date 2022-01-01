pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/LiquidityPool.sol";

contract TestLiquidityPool {
    address constant senderA = 0xB2838913C706E4923130667f59F978A681b16887;
    address constant senderB = 0x10c29A4E1fbbe68f23402d5786378F62F82D4c40;

    function testAddLiquidity() public payable {
        //Assert.equal(msg.value, 1000000000000000000, "value should be 1 Eth");
        LiquidityPool liquidityPool = new LiquidityPool();
        liquidityPool.addLiquidity{value: 1000000000000000000}();
        Assert.equal(liquidityPool.getShares(), 0, "Shares should be 1eth");
    }
}

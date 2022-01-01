pragma solidity >=0.5.0;

contract LiquidityPool {
    bool public isLocked;
    uint256 public constant FEE = 2 * 10**15;
    uint256 public shares;
    uint256 constant PRECISION = 10**18;

    mapping(address => uint256) public providerShares;
    mapping(address => uint256) public borrowerDebt;

    modifier lockPool() {
        require(!isLocked, "Pool is locked while loan is active");
        _;
    }

    event LiquidityProvided(
        address indexed provider,
        uint256 amountAdded,
        uint256 sharesCreated
    );

    event LiquidityRemove(
        address indexed provider,
        uint256 amountRemoved,
        uint256 sharesRemoved
    );

    event LoanCompleted(address indexed borrower, uint256 amountRepaid);

    event LoanRepayed(
        address indexed borrower,
        address indexed payee,
        uint256 amountRepaid
    );

    function addLiquidity() external payable lockPool {
        require(msg.value >= FEE, "Not enough ETH to add liquidity");
        uint256 proportion = wdiv(msg.value, address(this).balance);
        uint256 sharesAdded = sharesAfterDeposit(proportion);
        providerShares[msg.sender] = providerShares[msg.sender] + sharesAdded;
        shares = shares + sharesAdded;

        emit LiquidityProvided(msg.sender, msg.value, sharesAdded);
    }

    function getShares() external view returns (uint256) {
        return shares;
    }

    function sharesAfterDeposit(uint256 _liquidityProportion)
        public
        view
        returns (uint256 _shares)
    {
        uint256 newshares;

        if (shares == 0 || PRECISION == _liquidityProportion) {
            newshares = PRECISION;
        } else {
            newshares = wdiv(shares, _liquidityProportion);
        }

        _shares = sub(newshares, shares);
    }

    function wdiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
        z = add(mul(x, PRECISION), y / 2) / y;
    }

    function add(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require((z = x + y) >= x);
    }

    function sub(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require((z = x - y) <= x);
    }

    function mul(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x);
    }
}

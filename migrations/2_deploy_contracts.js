const Eyedentity = artifacts.require("Eyedentity");
const WickhamNft = artifacts.require("WickhamNft");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Eyedentity);
  deployer.deploy(
    WickhamNft,
    "",
    "",
    "",
    10,
    100,
    accounts[0],
    accounts[0]);
};

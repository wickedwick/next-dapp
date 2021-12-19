const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    live: {
      network_id: 1,
      host: "127.0.0.1",
      port: 8545,
      from: "0xD3593186ee5599c6896734dcc7992E607adF45e8",
    }
  }
};

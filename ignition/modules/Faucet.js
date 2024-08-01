const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Faucet", (m) => {
  const faucet = m.contract("Faucet");

  // m.call(apollo, "launch", []);

  return { faucet };
});

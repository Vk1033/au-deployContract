const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
  const url = process.env.ALCHEMY_URL;

  let artifacts = await hre.artifacts.readArtifact("Faucet");

  const provider = new ethers.JsonRpcProvider(url);

  let privateKey = process.env.TEST_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let faucet = await factory.deploy();

  console.log("Faucet address:", await faucet.getAddress());

  await faucet.waitForDeployment();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

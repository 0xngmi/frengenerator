const hre = require("hardhat");

async function deploy(contractName, params){
  const Contract = await hre.ethers.getContractFactory(contractName);
  const contract = await Contract.deploy(...params);
  await contract.deployed();
  return contract.address
}

// In blocks
const votingPeriod = 1
const votingDelay = 1
// Multiply by 1e18
const proposalThreshold = 1

async function main() {
  const [owner] = await hre.ethers.getSigners();

  await hre.run('compile');
  const token = await deploy("Comp", [owner]);
  const implementation = await deploy("GovernorBravoDelegate", [])
  const proxy = await deploy("GovernorBravoDelegator", [token, votingPeriod, votingDelay, proposalThreshold])

  console.log("Token deployed to:", token);
  console.log("Governance deployed to:", proxy);
  console.log("Proxy implementation deployed to:", implementation);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

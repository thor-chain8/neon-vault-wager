const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying NeonVaultWager contract...");
  
  // Get the contract factory
  const NeonVaultWager = await ethers.getContractFactory("NeonVaultWager");
  
  // Deploy the contract with a verifier address (you can change this)
  const verifierAddress = "0x0000000000000000000000000000000000000000"; // Replace with actual verifier
  const neonVaultWager = await NeonVaultWager.deploy(verifierAddress);
  
  await neonVaultWager.waitForDeployment();
  
  const contractAddress = await neonVaultWager.getAddress();
  
  console.log("NeonVaultWager deployed to:", contractAddress);
  console.log("Verifier address:", verifierAddress);
  
  // Save deployment info
  const deploymentInfo = {
    contractAddress: contractAddress,
    verifierAddress: verifierAddress,
    network: "sepolia",
    timestamp: new Date().toISOString()
  };
  
  const fs = require('fs');
  fs.writeFileSync('deployment-info.json', JSON.stringify(deploymentInfo, null, 2));
  
  console.log("Deployment info saved to deployment-info.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

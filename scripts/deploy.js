async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await ethers.getContractFactory("DanielToken");
    const token = await Token.deploy();
    
    await token.waitForDeployment();
    console.log(`Counter deployed to: ${await token.getAddress()}`)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });
const { ethers } = require("hardhat")
//const {deployments} = require('hardhat');

async function main() {
  // const DibbsERC721Upgradeable = await ethers.getContractFactory("DibbsERC721Upgradeable");
  // const dibbsERC721Upgradeable = await upgrades.deployProxy(DibbsERC721Upgradeable, ["https://dibbs/"])
  //const artifact = await deployments.getArtifact(artifactName);
  const KUTEKOI = await ethers.getContractFactory("KUTEKOI");
  const kUTEKOI = await KUTEKOI.deploy();

  await kUTEKOI.deployed();

  console.log("KuteKoi Address: ", kUTEKOI.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

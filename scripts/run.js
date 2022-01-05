const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Volcanic Titan", "Swamp Monster", "Forest Guardian", "Sea Monster"],
    [
      "https://i.imgur.com/bl8Wb04.jpeg",
      "https://i.imgur.com/LP36sBj.jpeg",
      "https://i.imgur.com/NUKZCSs.jpeg",
      "https://i.imgur.com/hWGeUua.jpeg",
    ],
    [1000, 300, 500, 800], // HP
    [500, 200, 200, 400] // Attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

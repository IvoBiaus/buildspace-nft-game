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
    [500, 200, 200, 400], // Attack damage
    "Kaiju", // Boss name
    "https://i.imgur.com/Hb4JtAG.jpeg", // Boss image
    1000000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(3);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");
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

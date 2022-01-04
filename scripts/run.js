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

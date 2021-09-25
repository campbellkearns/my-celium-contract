const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const sporeContractFactory = await hre.ethers.getContractFactory('SporePortal');
  const sporeContract = await sporeContractFactory.deploy();
  await sporeContract.deployed();

  console.log(`contract deployed to ${sporeContract.address}`);
  console.log(`contract deployed by ${owner.address}`);

  let sporeCount;
  sporeCount = await sporeContract.getTotalSpores();

  let sporeTxn = await sporeContract.depositSpore()
  await sporeTxn.wait()

  sporeCount = await sporeContract.getTotalSpores();

  sporeTxn = await sporeContract.connect(randomPerson).depositSpore();
  await sporeTxn.wait();

  sporeCount = await sporeContract.getTotalSpores();
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();

const { getNamedAccounts, deployments, network } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const qroxToken = await deploy("QroxToken", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: 1,
  });
  log(`Qrox Token deployed at ${qroxToken.address}`);
};

module.exports.tags = ["all", "token"];

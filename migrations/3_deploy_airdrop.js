const SelfKeyAirdrop = artifacts.require('./SelfKeyAirdrop.sol')

module.exports = (deployer) => {
  const crowdsaleAddress = '0x8d4b2cffe2dcbbf06eaa5920401db86ca5fb8177'
  const tokenAddress = '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7'

  deployer.deploy(
    SelfKeyAirdrop,
    crowdsaleAddress,
    tokenAddress
  )
}

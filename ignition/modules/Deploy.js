const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules')

const FaucetModule = buildModule('FaucetModule', m => {
  const faucet = m.contract('Faucet');

  return {
    faucet
  }
})

module.exports = FaucetModule
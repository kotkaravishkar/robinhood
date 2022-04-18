require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/8lsDSIR_XsR_zP2ISDGF7-RZsMoMytMY',
      accounts: [
        'db7f95972f2720ec6f1e66a482b677e33959deba2b964dae47de7b7edbe7960f',
      ],
    },
  },
}
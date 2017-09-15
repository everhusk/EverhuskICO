module.exports = {
  networks: {
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      from: "0xb571be0e1876dc43345cfb08e1ad2792f678aefd"
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "1",
      from: "0xaa684581E1F26D43BC9903915722485aEccBF520",
      gas: 4712388
    }
  }
};

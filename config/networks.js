// Network Configuration for all 3 testnets
export const NETWORKS = {
  tempoModerato: {
    name: 'Tempo Moderato Testnet',
    rpcUrl: 'https://rpc.moderato.tempo.xyz',
    chainId: 42431,
    explorer: 'https://explore.moderato.tempo.xyz',
    nativeCurrency: { name: 'Tempo', symbol: 'TEMPO', decimals: 18 }
  },
  arcTestnet: {
    name: 'Arc Testnet',
    rpcUrl: 'https://rpc.testnet.arc.network',
    chainId: 5042002,
    explorer: 'https://testnet.arcscan.app',
    nativeCurrency: { name: 'Arc', symbol: 'ARC', decimals: 18 }
  },
  genLayerAsimov: {
    name: 'GenLayer Testnet (Asimov)',
    chainId: 'asimov',
    sdkChain: 'testnetAsimov',
    explorer: 'https://explorer-asimov.genlayer.com',
    nativeCurrency: { name: 'GenLayer', symbol: 'GENL', decimals: 18 }
  }
};

export const CONTRACT_TYPES = [
  'ERC20Token',
  'ERC721NFT',
  'ERC1155MultiToken',
  'SimpleStorage',
  'MultiSigWallet',
  'Staking',
  'Vesting',
  'DAOGovernance',
  'LotteryRaffle'
];

export const DEPLOYMENT_CONFIG = {
  totalContracts: 1000,
  contractsPerBatch: 50,
  networksCount: 3,
  contractsPerNetwork: Math.floor(1000 / 3),
  maxRetries: 3,
  retryDelay: 1000
};
import { http, UseWagmiPlugin, createConfig } from 'use-wagmi';
import { goerli } from '@wagmi/core/chains';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/vue';
export default defineNuxtPlugin((nuxt) => {
  const runtimeConfig = useRuntimeConfig();
  const projectId = '60bf6103c5d5b08e59f161a60ce8e773';
  const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    verifyUrl: '',
  };
  const config = createConfig({
    chains: [goerli],
    ssr: true,
    transports: {
      [goerli.id]: http('https://eth-goerli.public.blastapi.io'),
    },
  });
  const wagmiConfig = defaultWagmiConfig({
    projectId, // required
    metadata, // required
    enableWalletConnect: true, // Optional - true by default
    enableInjected: true, // Optional - true by default
    enableEIP6963: true, // Optional - true by default
    enableCoinbase: true, // Optional - true by default
    ...config,
    chains: [goerli],
  });
  createWeb3Modal({
    themeMode: 'light',
    themeVariables: {
      '--w3m-font-family': 'Tomorrow',
    },
    projectId,
    wagmiConfig,
    defaultChain: goerli,
    chains: [goerli],
  });
  nuxt.vueApp.use(UseWagmiPlugin, { config });
});

import { getBlockchainNetwork, IWalletProvider, CHAIN_ID_MATIC_TESTNET } from "@zbyteio/zbyte-common";
import { WalletCore, Web3AuthProvider } from "@zbyteio/zbyte-wallet-sdk-core";

import { LCNC_TEST } from "./source";

export const init = async (accessToken: string) => {
  console.log("Initializing wallet");
  window.apiBaseUrl = LCNC_TEST.baseUrl;

  const web3Auth = new Web3AuthProvider();
  const walletProvider: IWalletProvider = web3Auth;
  const wallet = new WalletCore(walletProvider, getBlockchainNetwork(CHAIN_ID_MATIC_TESTNET));

  // For using web3auth which is the default and preferred provider
  // requires extra authentication function
  wallet.injectAuthVerifier({ accessToken, ...LCNC_TEST.authConfig });

  console.log(wallet);
  if (!wallet.isConnected()) {
    try {
      await wallet.connect();
      const userAddress = await wallet.getAddress();
      const zbyteBalance = await wallet.getTokenBalance(userAddress);
      console.log(userAddress, zbyteBalance);
    } catch (err) {
      console.log(err);
    }
  }
};

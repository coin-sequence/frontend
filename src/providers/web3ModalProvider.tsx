"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WEB3_PROJECT_ID || "PROJECT_ID";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const spolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://sepolia.drpc.org",
};

const goerli = {
  chainId: 5,
  name: "Goerli",
  currency: "ETH",
  explorerUrl: "https://goerli.etherscan.io/",
  rpcUrl: "https://goerli.drpc.org",
};

const optimismSepolia = {
  chainId: 11155420,
  name: "Optimism Sepolia",
  currency: "ETH",
  explorerUrl: "https://optimism-sepolia.etherscan.io/",
  rpcUrl: "https://optimism-sepolia.drpc.org",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};
// 4. Create Ethers config
const ethersConfig = defaultConfig({
  metadata,
  defaultChainId: 11155111,
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [optimismSepolia, mainnet, spolia, goerli],
  projectId,
  allWallets: "HIDE",
});

interface Web3ModalProps {
  children: React.ReactNode;
}

export function Web3Modal({ children }: Web3ModalProps) {
  return children;
}

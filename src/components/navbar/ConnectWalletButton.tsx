import React from "react";

import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useDisconnect,
} from "@web3modal/ethers/react";
import { truncateAddress } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export function ConnectWalletButton() {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected, chainId } = useWeb3ModalAccount();

  const handleConnectWallet = async () => {
    if (isConnected) {
      await open({
        view:"Account"
      });
    } else {
      await open();
    }
  };

  return (
    <Button
      className=" bg-[#0CC0DF] text-white px-4 py-2 rounded-lg"
      onClick={handleConnectWallet}
    >
      {isConnected && address ? truncateAddress(address) : "Connect Wallet"}
    </Button>
  );
}

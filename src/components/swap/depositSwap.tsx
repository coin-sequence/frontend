"use client";

import React, { useRef, useEffect, useState } from "react";
import { toast, Id } from "react-toastify";
import { ArrowDownCircleIcon } from "lucide-react";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { Contract, ethers, formatUnits } from "ethers";

import { DepositCombobox } from "@/components/swap/depositCombobox";
import { CTFTokenCombobox } from "@/components/swap/CTFTokenCombobox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SwapFooter } from "@/components/swap/SwapFooter";
import { ToastLink } from "@/components/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { USDCContract, CTFContract } from "@/utils/contracts";
import { getContract } from "@/utils/util";
import USDC_ABI from "@/abis/usdc_abi.json";
import CTF_ABI from "@/abis/ctf_abi.json";
import CROSS_CHAIN_ABI from "@/abis/cross_chain_pool_manager_abi.json";
import * as constants from "@/utils/const";

export const DepositSwap = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const [loading, setLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  let firstToastShown = false;

  const toastId = useRef<null | Id>(null);
  const toastId2 = useRef<null | Id>(null);

  const httpProvider = new ethers.JsonRpcProvider(
    "https://base-sepolia-rpc.publicnode.com/"
  );

  const addTokenToWallet = async () => {
    if (!walletProvider) return;

    try {
      await walletProvider.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: constants.CTF_ADDRESS, // The address that the token is at.
            symbol: "CTF", // A ticker symbol or shorthand, up to 5 chars.
          },
        },
      });
    } catch (error) {
    } finally {
      setShowDialog(false);
    }
  };

  const getApproveStatus = async () => {
    if (!address || !walletProvider) return;
    setLoading(true);
    const usdcContract = await getContract(
      constants.USDC_ADDRESS,
      USDC_ABI,
      walletProvider
    );

    const usdcContractInstance = new USDCContract(usdcContract);

    const allowance = await usdcContractInstance.allowance(
      address,
      constants.CTF_ADDRESS
    );

    setIsApproved(parseInt(allowance) >= constants.DEPOSIT_USDC_ALLOWANCE);
    setLoading(false);
  };

  const listenForEvents = async () => {
    let msgId = "";

    const ctfContract = await getContract(
      constants.CTF_ADDRESS,
      CTF_ABI,
      walletProvider
    );

    const crossChainContract = new Contract(
      constants.CROSS_CHAIN_POOL_MANAGER_ADDRESS,
      CROSS_CHAIN_ABI,
      httpProvider
    );

    ctfContract.on(
      "PoolManager__CrossChainDepositRequested",
      (depositId, chainId, user, _messageId, usdcAmount) => {
        console.log(
          "event1 ",
          depositId,
          chainId,
          user,
          _messageId,
          usdcAmount
        );
        if (user === address && msgId === "" && firstToastShown === false) {
          msgId = _messageId;
          firstToastShown = true;

          toastId.current = toast(<ToastLink tx={msgId} />, {
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
          });

          toastId2.current = toast("Waiting for deposit to complete...", {
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
          });
        }
      }
    );

    crossChainContract.on(
      "CrossChainPoolManager__ReceiptSent",
      (originMessageId, receiptMessageId, receiptType) => {
        console.log("event2 ", originMessageId, receiptMessageId, receiptType);
        if (originMessageId === msgId && toastId.current && toastId2.current) {
          toast.update(toastId.current, {
            type: "success",
            render: <ToastLink tx={msgId} />,
            autoClose: 3000,
            closeOnClick: true,
            closeButton: true,
          });

          toast.update(toastId2.current, {
            type: "default",
            render: <ToastLink tx={receiptMessageId} />,
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
          });
        }
      }
    );

    ctfContract.on("CTF__Deposited", (user, amount) => {
      if (user === address && toastId2.current) {
        setShowDialog(true);
        toast.update(toastId2.current, {
          type: "success",
          autoClose: 3000,
        });
        toast.success("CTF minted successfully", {
          autoClose: 3000,
        });
      }
    });
  };

  useEffect(() => {
    if (!address) return;
    getApproveStatus();
    listenForEvents();
  }, [address]);

  const onClick = async () => {
    if (!address || !walletProvider) {
      toast.error("Please connect your wallet");
      return;
    }
    setLoading(true);
    toastId.current = toast("getting USDC allowance...", {
      autoClose: false,
    });
    const usdcContract = await getContract(
      constants.USDC_ADDRESS,
      USDC_ABI,
      walletProvider
    );

    const ctfContract = await getContract(
      constants.CTF_ADDRESS,
      CTF_ABI,
      walletProvider
    );

    const crossChainContract = new Contract(
      constants.CROSS_CHAIN_POOL_MANAGER_ADDRESS,
      CROSS_CHAIN_ABI,
      httpProvider
    );

    const usdcContractInstance = new USDCContract(usdcContract);
    const ctfContractInstance = new CTFContract(ctfContract);
    const allowance = await usdcContractInstance.allowance(
      address,
      constants.CTF_ADDRESS
    );
    if (parseInt(allowance) < constants.DEPOSIT_USDC_ALLOWANCE) {
      const requiredAllowance = constants.DEPOSIT_USDC_ALLOWANCE;
      toast.update(toastId.current, {
        type: "info",
        render: `Approving ${formatUnits(requiredAllowance, 6)} USDC...`,
      });

      try {
        const tx = await usdcContractInstance.approve(
          constants.CTF_ADDRESS,
          parseInt(formatUnits(requiredAllowance, 6))
        );

        await tx.wait();
        toast.update(toastId.current, {
          type: "success",
          render: "Approved USDC",
          autoClose: 3000,
        });
      } catch {
        toast.update(toastId.current, {
          type: "error",
          render: "Failed to approve USDC",
          autoClose: 3000,
        });
        setLoading(false);
      }
    } else {
      toast.update(toastId.current, {
        type: "success",
        render: "USDC already approved",
        autoClose: 3000,
      });
    }

    // make a deposit

    toastId.current = toast("depositing 2 USDC per chain..", {
      autoClose: 1000,
    });

    try {
      const tx = await ctfContractInstance.deposit(
        constants.DEPOSIT_SWAP_PROVIDERS,
        constants.DEPOSIT_SWAP_CALL_DATA,
        constants.DEPOSIT_MIN_BPT_OUT,
        constants.DEPOST_USDC_AMOUNT_PER_CHAIN
      );

      await tx.wait();
    } catch (error) {
      console.log(error);
      toast.update(toastId.current, {
        type: "error",
        render: "Failed to deposit",
        autoClose: 3000,
      });
      setLoading(false);
    }

    return;
  };
  return (
    <div className="flex flex-col justify-between gap-4">
      <AlertDialog onOpenChange={setShowDialog} open={showDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>CTF Minted Successfully</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex items-center">
            <AlertDialogCancel className="m-0">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={addTokenToWallet}>
              Add CTF to wallet
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div>
        <DepositCombobox />
      </div>
      {/* <div>
        <ArrowDownCircleIcon className="ml-2 h-8 w-8 shrink-0 opacity-50 text-white mx-auto" />
      </div>
      <div>
        <CTFTokenCombobox />
      </div> */}
      <div>
        <Button
          className="w-full bg-[#30B7DFB0] text-2xl py-6 rounded-xl"
          onClick={onClick}
          disabled={loading}
        >
          {loading ? "Loading..." : isApproved ? "Deposit" : "Approve USDC"}
        </Button>
      </div>
      <Separator className="bg-[#7F7F7F99] opacity-60" />
      <div>
        <SwapFooter />
      </div>
    </div>
  );
};

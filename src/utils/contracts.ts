import { Contract, Eip1193Provider, formatUnits, parseUnits } from "ethers";
import { getContract } from "@/utils/util";

export class USDCContract {
  contract: Contract;
  constructor(contract: Contract) {
    this.contract = contract;
  }
  async balanceOf(address: string) {
    const balance = await this.contract.balanceOf(address);
    const formattedBalance = formatUnits(balance, 6);

    return formattedBalance;
  }

  async allowance(owner: string, spender: string) {
    const allowance = await this.contract.allowance(owner, spender);
    // const formattedAllowance = formatUnits(allowance, 6);

    return allowance;
  }

  async approve(spender: string, amount: number) {
    const tx = await this.contract.approve(
      spender,
      parseUnits(amount.toString(), 6)
    );

    return tx;
  }
}

export class CTFContract {
  contract: Contract;
  constructor(contract: Contract) {
    this.contract = contract;
  }

  async deposit(
    swapProviders: string[],
    swapsCalldata: string[][],
    minBPTOut: number[],
    usdcAmountPerChain: number
  ) {
    const tx = await this.contract.deposit(
      swapProviders,
      swapsCalldata,
      minBPTOut,
      usdcAmountPerChain
    );

    return tx;
  }
}

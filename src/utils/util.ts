import { Contract, BrowserProvider, Eip1193Provider } from "ethers";

export const getContract = async (
  address: string,
  abi: any,
  provider: Eip1193Provider | undefined
) => {
  if (!provider) {
    throw new Error("Provider is not defined");
  }
  const ethersProvider = new BrowserProvider(provider);
  const signer = await ethersProvider.getSigner();
  const contract = new Contract(address, abi, signer);
  return contract;
};

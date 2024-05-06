import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateAddress(address: string, chars = 4) {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

export function trucateNumber(number: number) {
  if (number < 1000) {
    return number;
  }
  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}K`;
  }

  if (number < 1000000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }

  if (number < 1000000000000) {
    return `${(number / 1000000000).toFixed(1)}B`;
  }

  return `${(number / 1000000000000000).toFixed(1)}T`;
}

import React from "react";
import { Link } from "lucide-react";

interface ToastLinkProps {
  tx: string;
}
export const ToastLink = ({ tx }: ToastLinkProps) => {
  const url = `https://ccip.chain.link/msg/${tx}`;
  return (
    <div>
      <div>Your transaction is in process</div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="underline text-blue-500 flex gap-2 items-center"
      >
        View on Chainlink <Link size={18}/>
      </a>
    </div>
  );
};

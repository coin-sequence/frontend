"use client";
import Image from "next/image";
import * as React from "react";
import { Check, ChevronsUpDown, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Command,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const dummyTokenList = [
  {
    value: "USDC",
    label: "USDC",
    name: "USD Coin",
  },
  // {
  //   value: "USDT",
  //   label: "USDT",
  //   name: "Tether",
  // },
  // {
  //   value: "DAI",
  //   label: "DAI",
  //   name: "Dai Stablecoin",
  // },
  // {
  //   value: "WBTC",
  //   label: "WBTC",
  //   name: "Wrapped Bitcoin",
  // },
  // {
  //   value: "ETH",
  //   label: "ETH",
  //   name: "Ethereum",
  // },
  // {
  //   value: "BTC",
  //   label: "BTC",
  //   name: "Bitcoin",
  // },
];

export function DepositCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("USDC");

  return (
    <div className="border-[1px] border-[#B3B3B3] rounded-xl">
      <div className="flex items-center">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="rounded-xl p-3 flex w-fit">
              <div className="w-[40px]">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={"/gfx.png"}
                    alt="Image"
                    layout="fill"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div>
                <p className="text-white font-bold text-sm">{value}</p>
              </div>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-white" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0">
            <Command className="bg-[#162031] border-none text-[#F7F9FB]">
              <CommandInput placeholder="Search by name" />
              <CommandEmpty>No Token found.</CommandEmpty>
              <CommandGroup>
                <CommandList className="no-scrollbar">
                  {dummyTokenList.map((token) => (
                    <CommandItem
                      key={token.value}
                      value={token.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue);
                        setOpen(false);
                      }}
                    >
                      <div className="rounded-xl p-3 flex w-fit items-center">
                        <div className="w-[40px]">
                          <AspectRatio ratio={1 / 1}>
                            <Image
                              src={"/gfx.png"}
                              alt="Image"
                              layout="fill"
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm p-0 m-0">
                            {token.name}
                          </p>
                          <p className="text-white font-normal text-sm p-0 m-0">
                            {token.label}
                          </p>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <div>
          <input
            type="number"
            className="bg-transparent rouw-[200px] nded-xl p-2 text-white font-bold text-xl outline-none border-none focus-visible:ring-transparent text-right w-full"
            autoCorrect="off"
            placeholder="0.0"
            value={4.0}
            disabled
            autoComplete="off"
          />
          {/* <p className="text-white font-bold text-xl m-0">USDC</p> */}
        </div>
      </div>
    </div>
  );
}

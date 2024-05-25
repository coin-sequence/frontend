import * as React from "react";
import Image from "next/image";
import clsx from "clsx";

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { trucateNumber } from "@/lib/utils";

interface IndexInfoProps {
  price: number;
  marketcap: number;
  name: string;
  image: string;
  selected: boolean;
}

export function IndexCard({ image, marketcap, name, price,selected }: IndexInfoProps) {
  return (
    <Card
      className={clsx("w-[350px] rounded-3xl mx-auto", {
        "bg-[#B373ED] shadow-[6px_10px_20px_#81379380]":
          name === "PolyPulse 10",
        "bg-[#54D23F] shadow-[6px_10px_20px_#2F7F2D80]": name === "Base MemeX",
        "bg-[#5875FC] shadow-[6px_10px_10px_#3C52B680]": name === "GFX",
        "border-red border-4 hover:shadow-2xl": selected && name === "PolyPulse 10",
        "border-green border-4 hover:shadow-2xl": selected && name === "Base MemeX",
        "border-blue border-4 hover:shadow-2xl": selected && name === "GFX",
      })}
    >
      <CardContent className="flex flex-col py-3">
        <div className="flex justify-between">
          <span>
            <p className="text-white text-xl">Price</p>
            <p className="text-white text-3xl font-semibold">
              ${trucateNumber(price)}
            </p>
          </span>

          <span>
            <p className="text-white text-xl">Market Cap</p>
            <p className="text-white text-3xl font-semibold">
              ${trucateNumber(marketcap)}
            </p>
          </span>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <div className="w-[80px]">
            <AspectRatio ratio={1 / 1}>
              <Image
                src={image}
                alt="Image"
                layout="fill"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">{name}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function IndexDisabledCard() {
  return (
    <Card className="w-[350px] rounded-3xl bg-[#62626280] border-[#62626280] border-2 hover:shadow-2xl opacity-50 mx-auto">
      <CardContent className="flex flex-col py-3">
        <div className="flex justify-between">
          <span>
            <p className="text-white text-xl">Price</p>
            <p className="text-white text-3xl font-semibold">-</p>
          </span>

          <span>
            <p className="text-white text-xl">Market Cap</p>
            <p className="text-white text-3xl font-semibold">-</p>
          </span>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <div className="w-[80px]">
            <AspectRatio ratio={1 / 1}>
              <Image
                src="/disabled.png"
                alt="Image"
                layout="fill"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">-</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

interface MarqueeElementProps {
  title: string;
  image: string;
  price: number | string;
  change1: number | string;
  change2: number | string;
  changeType: string;
}

export const MarqueeElement = ({
  image,
  change1,
  change2,
  changeType,
  price,
  title,
}: MarqueeElementProps) => {
  return (
    <div className="flex items-center justify-around min-w-[350px] mx-10 mt-20">
      <div className="w-[50px]">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={image}
            alt="Image"
            layout="fill"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <p className="text-[#C4C4C4] font-bold text-lg">{title}</p>
      <p className="text-sm text-white">{price}</p>
      <p className="text-sm text-white">{change1}</p>

      <p
        className={clsx("text-sm", {
          "text-green-500": changeType === "up",
          "text-red-500": changeType === "down",
          "hidden": changeType === "none",
        })}
      >
        ({changeType === "up" ? "+" : "-"}
        {change2})
      </p>
      <Separator className="bg-[#555555] h-[30px]" orientation="vertical"/>
    </div>
  );
};

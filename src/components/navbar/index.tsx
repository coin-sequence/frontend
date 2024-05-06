"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ConnectWalletButton } from "@/components/navbar/ConnectWalletButton";
import clsx from "clsx";

export function AppNavbar() {
  const pathname = usePathname();
  return (
    <header className="flex w-full shrink-0 items-center px-4 md:px-6 mt-10 lg:mt-0">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" href="#">
            <MountainIcon className="h-56 w-56" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/app"
            >
              Indexes
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/app/deposit"
            >
              Deposit
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-32 w-32 flex" />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-16 items-center ">
        <Link
          className={clsx("text-slate-50 no-underline hover:text-[#30B7DF] font-bold", {
            "text-[#30B7DF]": pathname === "/app",
          })}
          href="/app"
        >
          Indexes
        </Link>
        <Link
          className={clsx("text-slate-50 no-underline hover:text-[#30B7DF] font-bold", {
            "text-[#30B7DF]": pathname.includes("deposit"),
          })}
          href="/app/deposit"
        >
          Deposit
        </Link>
        <ConnectWalletButton />
      </nav>
      <div className="ml-auto lg:hidden">
        <ConnectWalletButton />
      </div>
    </header>
  );
}

export function HomeNavbar() {
  const pathname = usePathname();
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" href="#">
            <MountainIcon className="h-60 w-60" />
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className={clsx(
                "text-slate-50 no-underline hover:text-[#30B7DF]",
                {
                  "text-[#30B7DF]": pathname === "/home",
                }
              )}
              href="#"
            >
              Home
            </Link>
            <Link
              className={clsx(
                "text-slate-50 no-underline hover:text-[#30B7DF]",
                {
                  "text-[#30B7DF]": pathname === "/resources",
                }
              )}
              href="#"
            >
              Resources
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-36 w-36 flex mt-8" />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-16 items-center ">
        <Link
          className={clsx("text-slate-50 no-underline hover:text-[#30B7DF] font-bold", {
            "text-[#30B7DF]": pathname === "/home",
          })}
          href="#"
        >
          Home
        </Link>
        <Link
          className={clsx("text-slate-50 no-underline hover:text-[#30B7DF]", {
            "text-[#30B7DF]": pathname === "/resources",
          })}
          href="#"
        >
          Resources
        </Link>
        <Link
          className=" bg-[#0CC0DF] text-slate-50 no-underline px-4 py-2 rounded-lg"
          href={"/app"}
          replace
        >
          Launch App
        </Link>
      </nav>
      <div className="ml-auto lg:hidden">
        <Link
          className=" bg-[#0CC0DF] text-slate-50 no-underline px-4 py-2 rounded-lg"
          href={"/app"}
          replace
        >
          Launch App
        </Link>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <div {...props}>
      <Image
        src="/brandLogo1.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="Brand Logo"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </div>
  );
}

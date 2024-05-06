import React from "react";

import { HomeNavbar } from "@/components/navbar";

function Homelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-r from-[#1C1C21] via-[#232C3C] to-[#1C1C21]">
      <HomeNavbar />
      {children}
    </div>
  );
}

export default Homelayout;

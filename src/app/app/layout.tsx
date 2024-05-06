import React from "react";

import { AppNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-r from-[#1C1C21] via-[#232C3C] to-[#1C1C21] min-h-screen flex flex-col">
      <AppNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
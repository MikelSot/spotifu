import { Inter } from "next/font/google";
import { JSX } from "react";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

type RootLayoutProps = {
  children: JSX.Element;
};

export default RootLayout;

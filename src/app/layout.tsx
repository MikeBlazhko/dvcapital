import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <body ><main>{children}</main></body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/styles/globals.scss";


export const metadata: Metadata = {
  title: "ДВ Капитал",
  description: "ДВ Капитал",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <meta name="viewport" content="width=device-width,initial-scale=1">
         
      </meta>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet"/>
      <body ><main>{children}</main></body>
    </html>
  );
}

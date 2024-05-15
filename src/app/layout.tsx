/* eslint-disable @next/next/no-sync-scripts */
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
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.png"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet"/>
      <meta property="og:site_name" content={'ДВ Капитал'} key="og:site_name" />
      <meta property="og:title" content={'ДВ Капитал'} key="og:title" />
      <meta property="og:locale" content="ru_RU" key="og:locale" />
      <meta property="og:image" content={'/meta.png'} key="og:image" />
      <meta
        property="og:description"
        content={'ДВ Капитал'}
        key="og:description"
      />
      <head>
        <script src="https://inform.uscapital.ru/widget.js"></script>
      </head>
      <body ><main>{children}</main></body>
    </html>
  );
}

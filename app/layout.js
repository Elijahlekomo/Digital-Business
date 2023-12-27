import "./globals.css";
import {Josefin_Sans,  Lora,} from 'next/font/google';
export const metadata = {
  title: "DIGITALBUSINESS",
  description: "Generated by create next app",
};

const Josef = Lora({
  subsets: ['latin'],
  weight: [ "400", "500", "600", "700"],
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={Josef.className}>{children}</body>
    </html>
  );
}
 
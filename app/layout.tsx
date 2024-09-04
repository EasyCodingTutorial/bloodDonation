import type { Metadata } from "next";
import "./globals.css";

// for Layout Components
import { Navbar } from "./_layout/Navbar/Navbar";
import { Footer } from "./_layout/Footer/Footer";


export const metadata: Metadata = {
  title: {
    template: "%s | Easy Life Flow",
    default: "Easy Life Flow"
  },
  description: "Where Every Drop Save a Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

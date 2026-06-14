import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import NotificationBar from "@/components/layout/NotificationBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSlideOver from "@/components/cart/CartSlideOver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroDakk Foods Ltd | Premium Dried Vegetables from Kenya",
  description:
    "AgroDakk Foods Ltd is a Kenyan agribusiness supplying premium dried vegetables including Managu, Saga, Kunde, and Chillies to local and international markets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <NotificationBar />
          <Navbar />
          {children}
          <Footer />
          <CartSlideOver />
        </CartProvider>
      </body>
    </html>
  );
}
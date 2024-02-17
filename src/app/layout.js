import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import TopInNav from "@/components/TopInNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rockasus",
  description: "Creamos tu sitio web a tu medida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TopInNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

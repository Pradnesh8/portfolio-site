import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pradnesh's portfolio",
  description: "Pradnesh Khedekar's resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen items-center justify-around">
          <Navbar />
          <>
            {children}
          </>
        </main>

      </body>
    </html>
  );
}

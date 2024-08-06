import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TypeWriterComponent from "./components/typeWriter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pradnesh's portfolio",
  description: "Pradnesh Khedekar's resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen items-center justify-around p-24">
          <Navbar />
          <div>
            <TypeWriterComponent />
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}

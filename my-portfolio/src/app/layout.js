import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
})
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pradnesh's portfolio",
  description: "Pradnesh Khedekar's resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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

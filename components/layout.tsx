import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
        <main
            className={`${inter.className} min-h-screen max-w-5xl border-x border-white mx-auto px-5`}
        >
            {children}
        </main>
      <Footer />
    </>
  );
}
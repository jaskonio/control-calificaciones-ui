import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Control Clasificaiones App",
  description: "Control de clasificaciones de alumnos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={outfit.className}>
          <NextTopLoader color="#000"/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

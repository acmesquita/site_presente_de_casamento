import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presentes Catharina e Lucas",
  description: "Lista de presentes para o casamento de Catharina e Lucas",
  metadataBase: new URL('https://listacasamentocatharinaelucas.vercel.app/'),
  twitter: {
    card: "summary",
    title: "Presentes Catharina e Lucas",
    description: "Lista de presentes para o casamento de Catharina e Lucas",
    images: "/monograma.jpg"
  },
  openGraph: {
    siteName: "https://listacasamentocatharinaelucas.vercel.app/",
    title: "Presentes Catharina e Lucas",
    description: "Lista de presentes para o casamento de Catharina e Lucas",
    url: "https://listacasamentocatharinaelucas.vercel.app/",
    images: "/monograma.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <p className="text-center text-xs text-gray-500 pb-4">
          Desenvolvido por <a href="https://github.com/acmesquita" target="_blank" rel="noopener noreferrer">Catharina Mesquita</a>
        </p>
      </body>
    </html>
  );
}

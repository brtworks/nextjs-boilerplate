"use client";

import { Inter as GeistSans, Roboto_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import ImageShowcase from './ImageShowcase';
// import * as metadata from './metadata'; // Import metadata

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <head>
        <title>Berat Korkmaz</title>
      </head>
      <body>
        <div className="animate__animated animate__fadeIn">
          {children}
        </div>
        <ImageShowcase />
      </body>
    </html>
  );
}
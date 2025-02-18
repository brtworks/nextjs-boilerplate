"use client";

import React from 'react';
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
    <html lang="en">
      <head>
        <title>//brt</title>
      </head>
      <body>
        <div>
          <ImageShowcase />
          {children}
        </div>
      </body>
    </html>
  );
}
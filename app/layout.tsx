"use client";

import { Geist_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import ImageShowcase from './ImageShowcase';
import * as metadata from './metadata'; // Import metadata

const geistSans = Geist_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <head>
        {/* Add your head elements here */}
      </head>
      <body>
        <div className="animate__animated animate__fadeIn">
          {children}
        </div>
        <ImageShowcase />
      </body>
    </html>
  );
};

export default Layout;
```
/* filepath: /Users/beratkorkmaz/Applications/nextjs-boilerplate/app/globals.css */
@import 'animate.css/animate.min.css';

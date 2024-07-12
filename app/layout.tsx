import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

import './globals.css';
import { Toaster } from 'sonner';
import { ModalProvider } from '@/providers/modal-provider';
import { ourFileRouter } from './api/uploadthing/core';
import { extractRouterConfig } from 'uploadthing/server';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';

const inter = Poppins({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn('min-h-screen bg-background font-nunito antialiased', inter.variable)}>
        <Toaster />
        <ModalProvider />
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}

import Header from '@/components/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GlobalProvider from '@/context/GlobalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <GlobalProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </GlobalProvider>
    </UserProvider>
  );
}

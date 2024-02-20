import GlobalProvider from '@/context/GlobalProvider';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { Footer } from '@/components/Footer';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import MobileFilter from '@/components/FIlters/MobileFilter';
import TanStackProvider from '@/tanstack/TanStackProvider';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Pesquisar',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TanStackProvider>
      <UserProvider>
        <GlobalProvider>
          <html lang="en">
            <body className={`${jost.className} bg-grayBase min-[700px]:overflow-clip min-[700px]:grid grid-cols-gridHomeLayout`}>
              <Sidebar />
              <div>
                <MobileFilter />
                {children}
                <Footer />
              </div>
            </body>
          </html>
        </GlobalProvider>
      </UserProvider>
    </TanStackProvider>
  );
}

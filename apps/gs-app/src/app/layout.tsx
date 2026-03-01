import './global.css';
import { Urbanist } from 'next/font/google';
import { LayoutClient } from './components/LayoutClient';

export const metadata = {
  title: 'Welcome to Geometrika ',
  description: 'Geometrika Staging Area',
};

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

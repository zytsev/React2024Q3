import type { Metadata } from 'next';
import Header from '../../app/components/header/header';
import StoreProvider from './StoreProvider';
import { ContextProvider } from '../components/Context/Context';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Next App',
  description: 'My App is a Coffee',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <StoreProvider>
            <ContextProvider>
              <Header />
              {children}
            </ContextProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}

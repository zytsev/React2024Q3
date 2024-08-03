//import type { Metadata } from 'next';
import Header from './header/page';
import StoreProvider from './StoreProvider';
import { ContextProvider } from '../Context/Context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <StoreProvider>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </StoreProvider>
    </div>
  );
}

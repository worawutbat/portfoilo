/* eslint-disable react/jsx-props-no-spreading */
import '../styles/css/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import SideBar from '~/components/SideBar';
import ContextProvider from '~/store/providerComposer';
import ColorSchemeCSSVariable from '~/styles/styleComponents/ColorSchemeCSSVariable';

import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ContextProvider>
      <main className="container m-auto relative">
        <div className="relative h-[100vh]">
          <aside className="absolute left-0">
            <SideBar />
          </aside>
          <section className="pl-[128px] py-48">
            <Component {...pageProps} />
          </section>
        </div>
        <footer className="absolute bottom-0 left-0 right-0">
          <Footer />
        </footer>
        <ColorSchemeCSSVariable />
      </main>
    </ContextProvider>
  );
}

export default MyApp;

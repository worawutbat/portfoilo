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
      <>
        <div className="relative container m-auto">
          <aside className="sticky bottom-0 left-0 top-0 w-[fit-content] z-10">
            <SideBar />
          </aside>
          <main style={{ marginTop: '-100vh' }}>
            <section className="pl-[180px] pr-24 py-[128px]">
              <Component {...pageProps} />
            </section>
          </main>
          <footer className="sticky bottom-0 left-0 right-0">
            <Footer />
          </footer>
        </div>
        <ColorSchemeCSSVariable />
      </>
    </ContextProvider>
  );
}

export default MyApp;

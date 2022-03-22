import Head from 'next/head';

const preloadFonts = ['/fonts/Patrician.ttf', '/fonts/Plant.ttf', '/fonts/Chapaza.ttf'];

function FontsHead() {
  return (
    <Head>
      {preloadFonts.map((font) => (
        <link key={font} rel="preload" href={font} as="font" crossOrigin="" />
      ))}
    </Head>
  );
}

export default FontsHead;

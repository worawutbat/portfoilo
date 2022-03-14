import Head from 'next/head';

const preloadFonts = [
  '/a/fonts/AAA_bold_italic.ttf',
  '/a/fonts/AAA_bold.ttf',
  '/a/fonts/AAA_italic.ttf',
  '/a/fonts/AAA_light_italic.ttf',
  '/a/fonts/AAA_light.ttf',
  '/a/fonts/AAA.ttf',
  '/a/fonts/BBB_black_italic.ttf',
  '/a/fonts/BBB_black.ttf',
  '/a/fonts/BBB_bold_italic.ttf',
  '/a/fonts/BBB_bold.ttf',
  '/a/fonts/BBB_extraBold_italic.ttf',
  '/a/fonts/BBB_extraBold.ttf',
  '/a/fonts/BBB_extraLight_italic.ttf',
  '/a/fonts/BBB_extraLight.ttf',
  '/a/fonts/BBB_Italic.ttf',
  '/a/fonts/BBB_light_italic.ttf',
  '/a/fonts/BBB_light.ttf',
  '/a/fonts/BBB_medium_italic.ttf',
  '/a/fonts/BBB_medium.ttf',
  '/a/fonts/BBB_regular.ttf',
  '/a/fonts/BBB_semiBold_italic.ttf',
  '/a/fonts/BBB_semiBold.ttf',
  '/a/fonts/BBB_thin_italic.ttf',
  '/a/fonts/BBB_thin.ttf',
];

const FontsHead = () => {
  return (
    <Head>
      {preloadFonts.map((font) => (
        <link key={font} rel="preload" href={font} as="font" crossOrigin="" />
      ))}
    </Head>
  );
};

export default FontsHead;

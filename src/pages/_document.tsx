/* eslint-disable react/no-danger */
import Document, { Head, Html, Main, NextScript } from 'next/document';
// import images from '~/assets/images';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="th">
        {/* head on ssr */}
        <Head>
          <meta key="charSet" charSet="utf-8" />
          <meta key="locale" property="og:locale" content="th_TH" />

          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#ffb900" />
          <meta key="msapplication-TileImage" name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta key="theme-color" name="theme-color" content="#ffb900" />
          {/* Favicon */}

          {/* default meta share */}
          {/* Meta share */}
          <meta
            key="keyword"
            name="keyword"
            content="นิยาย,นิยายออนไลน,อ่านนิยาย,เขียนนิยาย,pintobook,fictionlog,storylog,ฟิก,นิยายแฟนตาซี,นิยายรัก,นิยายวาย,นิยายดราม่า,นิยายแปล,ถูกลิขสิทธิ์"
          />
          <meta key="og:site_name" property="og:site_name" content="Pintobook" />
          <meta key="cache-control" httpEquiv="cache-control" content="max-age=43200" />
          <meta key="og:image:width" property="og:image:width" content="1200" />
          <meta key="og:image:height" property="og:image:height" content="628" />
          {/* <meta key="og:image" property="og:image" content={faSearch} /> */}
          <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
          <meta key="twitter:site" property="twitter:site" content="@PintobookApp" />
          <meta key="twitter:creator" property="twitter:creator" content="@PintobookApp" />
          <meta key="twitter:domain" property="twitter:domain" content="pintobook.co" />
          <meta key="twitter:site_name" property="twitter:site_name" content="pintobook" />
          {/* Meta share */}
        </Head>

        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />

          {/* Omise */}
          <script async src="https://cdn.omise.co/omise.js" />

          {/* apple SDK */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.AppleID.auth.init({
                  clientId: '${process.env.NEXT_PUBLIC_APPLE_CLIENT_ID}',
                  usePopup: true,
                  scope: 'email',
                  redirectURI: '${process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI}',
                });
              `,
            }}
          />
          {/* Omise */}
          <script async src="https://cdn.omise.co/omise.js" />
        </body>
      </Html>
    );
  }
}

import Image from 'next/image';
import { useContext } from 'react';

import { ThemeContext } from '~/store/themeProvider';

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="bg-componentsBgBase">
      <h1 className="text-colorsBlack01Label">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}

export default Home;

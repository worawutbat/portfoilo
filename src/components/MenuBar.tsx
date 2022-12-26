import {
  // faSearch,
  //   faBars,
  //   faAnchor,
  //   faCircleUser,
  //   faEnvelope,
  //   faMessage,
  //   faLocationDot,
  //   faUser,
  faMoon,
  faSun,
  //   faCity,
  //   faAddressCard,
  //   faAddressBook,
  //   faBriefcase,
  //   faCakeCandles,
  //   faPhone,
  //   faGraduationCap,
  //   faLaptopCode,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';
import Icon from './Icon';

interface IPropsMenuBar {
  theme: 'DAY' | 'NIGHT';
  onChangeTheme: (theme: 'DAY' | 'NIGHT') => void;
}
function MenuBar(props: IPropsMenuBar) {
  const { theme, onChangeTheme } = props;

  return (
    <div className="px-16 bg-componentsBgGrouped01 w-[120px] h-[100vh] py-48 flex flex-col items-center border-r border-r-colorsBlack02Label">
      <Link href="/">
        <Button className="border-none">
          <div style={{ width: 40 }}>
            <Image src="/favicon/android-chrome-192x192.png" layout="responsive" width={30} height={30} alt="Picture of the author" />
          </div>
        </Button>
      </Link>
      <div className="flex flex-col py-32 space-y-12">
        <Button onClick={() => onChangeTheme(theme === 'DAY' ? 'NIGHT' : 'DAY')}>
          <Icon icon={theme === 'DAY' ? faSun : faMoon} size="2x" />
        </Button>
        <Link href="/game" passHref>
          <Button>
            <Icon icon={faGamepad} size="2x" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MenuBar;

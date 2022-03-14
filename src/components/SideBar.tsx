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
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useCallback, useContext, useMemo } from 'react';

import Button from './Button';
import Icon from './Icon';

import { ThemeContext } from '~/store/themeProvider';

function SideBar() {
  const { theme, dayThemeMode, nightThemeMode } = useContext(ThemeContext);

  const isDayTheme = useMemo(() => theme === 'DAY', [theme]);

  const changeThemeBGRoot = useCallback(() => {
    if (document === undefined) return;

    if (theme === 'DAY') {
      document.body.style.backgroundColor = '#000000';
      return;
    }
    if (theme === 'NIGHT') {
      document.body.style.backgroundColor = '#fffffe';
    }
  }, [theme]);

  return (
    <div className="px-16 py-12 bg-componentsBgBase h-[100vh] py-48 flex flex-col items-center border-r border-r-colorsBlack02Label">
      <div style={{ width: 40 }}>
        <Image src="/favicon/android-chrome-192x192.png" layout="responsive" width={30} height={30} alt="Picture of the author" />
      </div>
      <div className="flex flex-col space-y-12 py-32">
        <Button
          onClick={
            isDayTheme
              ? () => {
                  nightThemeMode?.();
                  changeThemeBGRoot();
                }
              : () => {
                  dayThemeMode?.();
                  changeThemeBGRoot();
                }
          }
        >
          <Icon icon={isDayTheme ? faSun : faMoon} size="2x" />
        </Button>
      </div>
      <div />
    </div>
  );
}

export default SideBar;

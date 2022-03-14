/* eslint-disable react/no-unused-prop-types */
// this is component to set css valiable

import { useContext } from 'react';

import colorScheme from '../colorScheme';

import { ThemeContext } from '~/store/themeProvider';

const day = `
  ${colorScheme.colorsRed01}: #B00020;
  ${colorScheme.colorsRed02}: #B02600;

  ${colorScheme.colorsBlack01Label}: #2A2C2E;
  ${colorScheme.colorsBlack02Label}: #343739;
  ${colorScheme.colorsBlack03}: #B9B9BA;
  ${colorScheme.colorsBlack04}: #D0D1D1;

  ${colorScheme.colorsBlue01}: #37b0cc;
  ${colorScheme.colorsBlue02}: #249eba;
  ${colorScheme.colorsBlue03}: #4cc3de;
  ${colorScheme.colorsBlue04}: #86def0;
  ${colorScheme.colorsBlue05}: #c9f4fd;
  ${colorScheme.colorsBlue06}: #dbf7fd;
  ${colorScheme.colorsBlue07}: #effcff;

  ${colorScheme.colorsWhite}: #ffffff;

  ${colorScheme.componentsBgBase}: #fffffe;
  ${colorScheme.componentsBgGrouped01}: #fffffd;

  ${colorScheme.opacityBlack20}: rgba(0, 0, 0, 0.2);
  ${colorScheme.opacityBlack40}: rgba(0, 0, 0, 0.4);
  ${colorScheme.opacityBlack60}: rgba(0, 0, 0, 0.6);
  ${colorScheme.opacityBlack80}: rgba(0, 0, 0, 0.8);

  ${colorScheme.opacityWhite20}: rgba(255, 255, 255, 0.2);
  ${colorScheme.opacityWhite20}: rgba(255, 255, 255, 0.4);
  ${colorScheme.opacityWhite60}: rgba(255, 255, 255, 0.6);
  ${colorScheme.opacityWhite80}: rgba(255, 255, 255, 0.8);
`;

const night = `
  ${colorScheme.colorsRed01}: #CF6679;
  ${colorScheme.colorsRed02}: #CF666F;

  ${colorScheme.colorsBlack01Label}: #fdfdfd;
  ${colorScheme.colorsBlack02Label}: #adadad;
  ${colorScheme.colorsBlack03}: #1c1d21;
  ${colorScheme.colorsBlack04}: #151517;

  ${colorScheme.colorsBlue01}: #37c0e0;
  ${colorScheme.colorsBlue02}: #37d6fa;
  ${colorScheme.colorsBlue03}: #337888;
  ${colorScheme.colorsBlue04}: #255864;
  ${colorScheme.colorsBlue05}: #1c4a55;
  ${colorScheme.colorsBlue06}: #0f3a45;
  ${colorScheme.colorsBlue07}: #012933;

  ${colorScheme.colorsWhite}: #ffffff;

  ${colorScheme.componentsBgBase}: #000000;
  ${colorScheme.componentsBgGrouped01}: #555657;

  ${colorScheme.opacityBlack20}: rgba(0, 0, 0, 0.2);
  ${colorScheme.opacityBlack40}: rgba(0, 0, 0, 0.4);
  ${colorScheme.opacityBlack60}: rgba(0, 0, 0, 0.6);
  ${colorScheme.opacityBlack80}: rgba(0, 0, 0, 0.8);

  ${colorScheme.opacityWhite20}: rgba(255, 255, 255, 0.2);
  ${colorScheme.opacityWhite60}: rgba(255, 255, 255, 0.4);
  ${colorScheme.opacityWhite60}: rgba(255, 255, 255, 0.6);
  ${colorScheme.opacityWhite80}: rgba(255, 255, 255, 0.8);
`;

export interface IPropsColorSchemeCSSVariable {
  theme: 'DAY' | 'NIGHT' | string;
}

const getTheme = (theme: 'DAY' | 'NIGHT' | string) => {
  switch (theme) {
    case 'DAY':
      return day;
    case 'NIGHT':
      return night;
    default:
      return day;
  }
};

function ColorSchemeCSSVariable() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = getTheme(theme);
  return (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
      :root {
        ${currentTheme}
      }
      `,
      }}
    />
  );
}

export default ColorSchemeCSSVariable;

const rem = (px) => `${px / 16}rem`;

const colorScheme = {
  colorsRed01: 'var(--colorsRed01)',
  colorsRed02: 'var(--colorsRed02)',
  colorsRed03: 'var(--colorsRed03)',
  colorsRed04: 'var(--colorsRed04)',
  colorsRed05: 'var(--colorsRed05)',
  colorsRed06: 'var(--colorsRed06)',
  colorsRed07: 'var(--colorsRed07)',

  colorsBlack01Label: 'var(--colorsBlack01Label)',
  colorsBlack02Label: 'var(--colorsBlack02Label)',
  colorsBlack03: 'var(--colorsBlack03)',
  colorsBlack04: 'var(--colorsBlack04)',

  colorsYellow01: 'var(--colorsYellow01)',
  colorsYellow02: 'var(--colorsYellow02)',
  colorsYellow03: 'var(--colorsYellow03)',
  colorsYellow04: 'var(--colorsYellow04)',
  colorsYellow05: 'var(--colorsYellow05)',
  colorsYellow06: 'var(--colorsYellow06)',
  colorsYellow07: 'var(--colorsYellow07)',

  colorsBlue01: 'var(--colorsBlue01)',
  colorsBlue02: 'var(--colorsBlue02)',
  colorsBlue03: 'var(--colorsBlue03)',
  colorsBlue04: 'var(--colorsBlue04)',
  colorsBlue05: 'var(--colorsBlue05)',
  colorsBlue06: 'var(--colorsBlue06)',
  colorsBlue07: 'var(--colorsBlue07)',

  colorsWhite: 'var(--colorsWhite)',

  componentsBgBase: 'var(--componentsBgBase)',
  componentsBgGrouped01: 'var(--componentsBgGrouped01)',

  opacityBlack20: 'var(--opacityBlack20)',
  opacityBlack40: 'var(--opacityBlack40)',
  opacityBlack60: 'var(--opacityBlack60)',
  opacityBlack80: 'var(--opacityBlack80)',

  opacityWhite20: 'var(--opacityWhite20)',
  opacityWhite40: 'var(--opacityWhite40)',
  opacityWhite60: 'var(--opacityWhite60)',
  opacityWhite80: 'var(--opacityWhite80)',

  overlayBGModal: 'var(--overlayBGModal)',
};

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  // disable unused style
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      pat: ['Patrician', 'Helvetica', 'arial', 'sans-serif'],
      chz: ['Chapaza', 'Helvetica', 'arial', 'sans-serif'],
      plt: ['Plant', 'Helvetica', 'arial', 'sans-serif'],
      body: ['Chapaza', 'Helvetica', 'arial', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1170px',
    },
    extend: {
      textColor: colorScheme,
      backgroundColor: colorScheme,
      borderColor: colorScheme,
      placeholderColor: colorScheme,
      space: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        36: rem(36),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      padding: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        36: rem(36),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      margin: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        36: rem(36),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      gap: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      fontSize: {
        // 10: rem(10),
        12: rem(12),
        14: rem(14),
        15: rem(15),
        16: rem(16), // base
        18: rem(18),
        20: rem(20),
        22: rem(22),
        24: rem(24),
        26: rem(26),
        28: rem(28),
        30: rem(30),
        32: rem(32),
        34: rem(34),
        36: rem(36),
      },
      borderRadius: {
        0: '0',
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
      },
      transitionProperty: {
        height: 'height',
      },
      boxShadow: {
        'opacity-black-20': '0 10px 50px 0 var(--opacityBlack20)',
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
};

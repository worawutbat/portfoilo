import classNames from 'classnames';
import { useContext, useMemo } from 'react';

import { ThemeContext } from '~/store/themeProvider';

interface IPropsButton {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  onClick?: () => void;
}

const defaultProps = {
  className: undefined,
  onClick: undefined,
};

const getThemeClassName = (color: string) => {
  switch (color) {
    case 'NIGHT': {
      return 'bg-opacityWhite20 hover:bg-opacityWhite20 text-colorsWhite';
    }
    case 'DAY':
    default: {
      return 'bg-componentsBgBase hover:bg-opacityBlack20 text-colorsBlack01Label';
    }
  }
};

function Button(props: IPropsButton) {
  const { children, className, onClick } = props;
  const { theme } = useContext(ThemeContext);

  const themeClassName = useMemo(() => getThemeClassName(theme), [theme]);
  return (
    <button onClick={onClick} type="button" className={classNames('rounded-[8px] py-8 px-12 border border-colorsBlack01Label', themeClassName, className)}>
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;

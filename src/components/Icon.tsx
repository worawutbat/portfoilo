import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { ThemeContext } from '~/store/themeProvider';

interface IPropsIcon {
  icon: IconDefinition;
  size?: SizeProp;
}

const defaultProps = {
  size: '1x',
};

const getColorValue = (theme: string) => {
  switch (theme) {
    case 'NIGHT': {
      return '#ffffff';
    }
    case 'DAY':
    default: {
      return '#2A2C2E';
    }
  }
};

function Icon(props: IPropsIcon) {
  const { theme } = useContext(ThemeContext);
  const { icon, size } = props;
  const colorValue = getColorValue(theme);
  return <FontAwesomeIcon size={size} icon={icon} color={colorValue} />;
}

Icon.defaultProps = defaultProps;

export default Icon;

/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { CSSProperties } from 'react';

import css from './clock.module.scss';

import Button from '~/components/Button';
import Icon from '~/components/Icon';

interface IPropsClock {
  theme: 'DAY' | 'NIGHT';
  onChangeTheme: (theme: 'DAY' | 'NIGHT') => void;
}

function Clock(props: IPropsClock) {
  const { theme, onChangeTheme } = props;
  return (
    <div className="flex justify-center items-center bg-slate-500 h-full">
      <div className="flex justify-center items-center">
        <Icon icon={faSun} size="1x" />
        <button type="button" className={classNames('px-8 py-12 border border-cyan-50 rounded-full  before:content-[test]', css.toggleButton)} />
        <Icon icon={faMoon} size="1x" />
      </div>
      <div>
        <Button className="" onClick={() => onChangeTheme(theme === 'DAY' ? 'NIGHT' : 'DAY')}>
          <Icon icon={theme === 'DAY' ? faSun : faMoon} size="2x" />
        </Button>
      </div>
      <div>clock</div>
    </div>
  );
}

export default Clock;

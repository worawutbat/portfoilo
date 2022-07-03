import Clock from '~/app/clock';

interface IPropsClock {
  theme: 'DAY' | 'NIGHT';
  onChangeTheme: (theme: 'DAY' | 'NIGHT') => void;
}

function ClockPage(props: IPropsClock) {
  const { theme, onChangeTheme } = props;
  return <Clock theme={theme} onChangeTheme={onChangeTheme} />;
}

export default ClockPage;

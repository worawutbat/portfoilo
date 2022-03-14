import { createContext, ReactChild, ReactChildren, useMemo, useReducer } from 'react';

const initialState = {
  theme: 'DAY',
};

interface IStateThemeReducer {
  theme: 'DAY' | 'NIGHT';
}

export const ThemeContext = createContext<IStateThemeReducer & { dayThemeMode?: () => void; nightThemeMode?: () => void }>({ theme: 'DAY' });

const themeReducer = (state: IStateThemeReducer, action: { type: 'DAY' | 'NIGHT' }) => {
  switch (action.type) {
    case 'NIGHT':
      return {
        ...state, // copy state
        theme: 'NIGHT', // set state counter
      };
    case 'DAY':
    default:
      return {
        ...state, // copy state
        theme: 'DAY', // set state counter
      };
  }
};

interface IPropsThemeProvider {
  children?: ReactChild | ReactChildren;
}

const defaultProps = {
  children: undefined,
};

function ThemeProvider(props: IPropsThemeProvider) {
  const { children } = props;
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState);

  const { theme } = themeState;

  const dayThemeMode = () => themeDispatch({ type: 'DAY' }); // ส่ง type ADD_COUNTER และ  เพื่อให้ conterReducer ไปใช้งานต่อ
  const nightThemeMode = () => themeDispatch({ type: 'NIGHT' }); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  const themeProviderValue = useMemo(() => ({ theme, dayThemeMode, nightThemeMode }), [theme]);

  return <ThemeContext.Provider value={themeProviderValue}>{children}</ThemeContext.Provider>;
}

ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;

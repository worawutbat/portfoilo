import { cloneElement, ReactChild, ReactChildren, ReactNode } from 'react';

import ThemeProvider from './themeProvider';

interface IPropsProviderComposer {
  contexts: any;
  children: ReactChild | ReactChildren;
}
function ProviderComposer({ contexts, children }: IPropsProviderComposer) {
  return contexts.reduce(
    (kids: any, parent: any) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  );
}
interface IPropsContextProvider {
  children: ReactChild | ReactChildren;
}

export default function ContextProvider({ children }: IPropsContextProvider) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[<ThemeProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

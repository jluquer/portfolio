import { FC, ReactNode, useReducer, createContext, useMemo } from 'react';
import {
  TranslationLocale,
  Translations,
  translate,
  translationsReducer,
} from '..';

interface ContextProps {
  currentLang: TranslationLocale;
  t: Translations;
  setLang: (lang: TranslationLocale) => void;
}

export const TranslationsContext = createContext({} as ContextProps);

export interface TranslationsState {
  currentLang: TranslationLocale;
  t: Translations;
}

const defaultLang: TranslationLocale = 'es';
const translationsInitialState: TranslationsState = {
  currentLang: defaultLang,
  t: (await translate(defaultLang)) ?? {},
};

interface ProviderProps {
  children: ReactNode;
}

export const TranslationsProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    translationsReducer,
    translationsInitialState,
  );

  const setLang = async (lang: TranslationLocale) => {
    const t = (await translate(lang)) ?? {};
    dispatch({ type: '[Translations] - SetLang', payload: { lang, t } });
    document.documentElement.lang = lang;
  };

  const value = useMemo(() => ({ ...state, setLang }), [state]);
  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
};

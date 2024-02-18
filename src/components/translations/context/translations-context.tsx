import { FC, ReactNode, useReducer, createContext } from 'react';
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
  setTranslations: (t: Translations) => void;
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

  const setLang = (lang: TranslationLocale) => {
    dispatch({ type: '[Translations] - SetLang', payload: lang });
    document.documentElement.lang = lang;
  };

  const setTranslations = (t: Translations) => {
    dispatch({ type: '[Translations] - SetTranslations', payload: t });
  };

  return (
    <TranslationsContext.Provider
      value={{ ...state, setLang, setTranslations }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};

import { FC, ReactNode, useReducer, createContext } from 'react';
import { translationsReducer } from '.';
import { TranslationLocale, Translations, defaultLang, translate } from '..';

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

const TRANSLATIONS_INITIAL_STATE: TranslationsState = {
  currentLang: defaultLang,
  t: await translate(defaultLang),
};

interface ProviderProps {
  children: ReactNode;
}

export const TranslationsProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    translationsReducer,
    TRANSLATIONS_INITIAL_STATE,
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

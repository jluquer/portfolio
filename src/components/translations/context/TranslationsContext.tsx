import {
  ReactNode,
  useReducer,
  createContext,
  useMemo,
  useEffect,
} from 'react';
import { TranslationLocale, Translations, translationsReducer } from '..';
import { t as tES } from '@/locales/es';
import { t as tEN } from '@/locales/en';

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

const defaultLang: TranslationLocale = 'en';
const availableLanguages: TranslationLocale[] = ['es', 'en'];
const browserLocale = navigator.language.split(/[-_]/)[0] as TranslationLocale;
const isBrowserLangAvailable = availableLanguages.includes(browserLocale);
const initialLang = isBrowserLangAvailable ? browserLocale : defaultLang;
const translationsInitialState: TranslationsState = {
  currentLang: initialLang ?? defaultLang,
  t: initialLang == 'es' ? tES : tEN,
};

interface Props {
  children: ReactNode;
}

export function TranslationsProvider({ children }: Props) {
  const [state, dispatch] = useReducer(
    translationsReducer,
    translationsInitialState,
  );

  useEffect(() => {
    setTranslations(state.currentLang === 'es' ? tES : tEN);
  }, [state.currentLang]);

  const setLang = async (lang: TranslationLocale) => {
    dispatch({ type: '[Translations] - SetLang', payload: lang });
    document.documentElement.lang = lang;
  };

  const setTranslations = (t: Translations) => {
    dispatch({ type: '[Translations] - SetTranslations', payload: t });
  };

  const value = useMemo(() => ({ ...state, setLang }), [state]);
  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}

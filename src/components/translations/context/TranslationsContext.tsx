import {
  ReactNode,
  useReducer,
  createContext,
  useMemo,
  useEffect,
} from 'react';
import {
  TranslationLocale,
  Translations,
  translate,
  translationsReducer,
} from '..';
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

const initialLang: TranslationLocale =
  (navigator.language as TranslationLocale) ?? 'es';
const translationsInitialState: TranslationsState = {
  currentLang: initialLang,
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
    (async () => {
      const t = await translate(state.currentLang);
      setTranslations(t);
    })();
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

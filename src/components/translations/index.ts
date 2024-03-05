import { Translations } from './translations.interface';

export type TranslationLocale = 'es' | 'en';

export async function translate(
  lang: TranslationLocale,
): Promise<Translations> {
  const { t } = await import(`../../locales/${lang}.ts`);
  return t;
}

export * from './LanguagePicker';
export * from './translations.interface';
export * from './context/TranslationsContext';
export * from './context/TranslationsReducer';
export * from './context/useTranslations';
export * from './AvailableLangs';

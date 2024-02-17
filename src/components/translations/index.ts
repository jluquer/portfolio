import { Translations } from './translations.interface';

export type TranslationLocale = 'es' | 'en';

export async function translate(lang: string): Promise<Translations> {
  const { t } = await import(`@/components/translations/locales/${lang}.ts`);
  return t;
}

export * from './LanguagePicker';
export * from './translations.interface';
export * from './context/translations-context';
export * from './context/translations-reducer';
export * from './context/use-translations';
export * from './AvailableLangs';

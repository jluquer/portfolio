export type TranslationLocale = 'es' | 'en';
export const defaultLang: TranslationLocale = 'es';

export const langs = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
];

export async function translate(lang: string): Promise<Translations> {
  const { t } = await import(`@/translations/locales/${lang}.ts`);
  return t;
}

export interface Translations {
  cv: {
    sections: {
      experience: {
        title: string;
      };
    };
  };
}

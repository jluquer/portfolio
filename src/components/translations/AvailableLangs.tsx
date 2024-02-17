import { TranslationLocale } from '.';
import { EnglishFlagIcon, SpanishFlagIcon } from '../Icons';

export const langs: {
  value: TranslationLocale;
  label: string;
  icon: JSX.Element;
}[] = [
  { value: 'es', label: 'Español', icon: <SpanishFlagIcon /> },
  { value: 'en', label: 'English', icon: <EnglishFlagIcon /> },
];

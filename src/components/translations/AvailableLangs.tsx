import { SVGProps } from 'react';
import { TranslationLocale } from '.';
import { EnglishFlagIcon, SpanishFlagIcon } from '../Icons';

export const langs: {
  value: TranslationLocale;
  label: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  { value: 'es', label: 'Español', Icon: SpanishFlagIcon },
  { value: 'en', label: 'English', Icon: EnglishFlagIcon },
];

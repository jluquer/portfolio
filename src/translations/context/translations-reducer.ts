import { TranslationsState } from '.';
import { TranslationLocale, Translations } from '..';

type TranslationsActionType =
  | {
      type: '[Translations] - SetLang';
      payload: TranslationLocale;
    }
  | {
      type: '[Translations] - SetTranslations';
      payload: Translations;
    };

export const translationsReducer = (
  state: TranslationsState,
  action: TranslationsActionType,
): TranslationsState => {
  switch (action.type) {
    case '[Translations] - SetLang':
      return {
        ...state,
        currentLang: action.payload,
      };

    case '[Translations] - SetTranslations':
      return {
        ...state,
        t: action.payload,
      };
    default:
      return state;
  }
};

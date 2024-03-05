import { TranslationLocale, Translations, TranslationsState } from '..';

type TranslationsActionType = {
  type: '[Translations] - SetLang';
  payload: { lang: TranslationLocale; t: Translations };
};

export const translationsReducer = (
  state: TranslationsState,
  action: TranslationsActionType,
): TranslationsState => {
  switch (action.type) {
    case '[Translations] - SetLang':
      return {
        ...state,
        currentLang: action.payload.lang,
        t: action.payload.t,
      };
    default:
      return state;
  }
};

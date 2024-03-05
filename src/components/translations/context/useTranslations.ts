import { useContext } from 'react';
import { TranslationsContext } from '..';

export const useTranslations = () => {
  const translationsContext = useContext(TranslationsContext);

  if (!translationsContext) {
    throw new Error(
      'useCurrentUser has to be used within <CurrentUserContext.Provider>',
    );
  }

  return translationsContext;
};

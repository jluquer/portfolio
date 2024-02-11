import { TranslationLocale, langs, translate } from '@/translations';
import { useTranslations } from '@/translations/context';

export function LanguagePicker() {
  const { currentLang, setLang, setTranslations, t } = useTranslations();

  const onChangeLang = async (lang: TranslationLocale) => {
    setLang(lang);
    setTranslations(await translate(lang));
  };

  return (
    <div>
      <h1>Eminem: {t.cv.sections.experience.title}</h1>

      <p>
        Selected lang is <strong>{currentLang}</strong>
      </p>

      <select
        value={currentLang}
        onChange={(e) => onChangeLang(e.target.value as TranslationLocale)}
      >
        {langs.map((lang) => (
          <option value={lang.value}>{lang.label}</option>
        ))}
      </select>
    </div>
  );
}

import {
  TranslationLocale,
  translate,
  useTranslations,
  langs,
} from '@/components/translations';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui';

export function LanguagePicker() {
  const { currentLang, setLang, setTranslations } = useTranslations();

  const onChangeLang = async (lang: TranslationLocale) => {
    setLang(lang);
    setTranslations(await translate(lang));
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='hover:bg-slate-300'
            title={`Selected language ${currentLang}`}
          >
            {langs.find((lang) => lang.value === currentLang)?.icon}
            <span className='sr-only'>Set language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {langs.map((lang) => (
            <DropdownMenuItem
              onClick={() => onChangeLang(lang.value)}
              key={lang.value}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

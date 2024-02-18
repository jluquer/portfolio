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

interface Props {
  size?: number;
}

export function LanguagePicker({ size }: Props) {
  const { currentLang, setLang, setTranslations } = useTranslations();
  const onChangeLang = async (lang: TranslationLocale) => {
    setLang(lang);
    setTranslations(await translate(lang));
  };

  const LangIcon = langs.find((lang) => lang.value === currentLang)?.Icon;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            title={`Selected language ${currentLang}`}
          >
            {LangIcon && (
              <LangIcon
                width={size}
                height={size}
              />
            )}
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

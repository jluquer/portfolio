import { useTranslations, langs } from '@/components/translations';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  size?: number;
  commandMenu?: boolean;
}

export function LanguagePicker({ size, commandMenu = false }: Props) {
  const [langName, setLangName] = useState<string | undefined>();
  const { currentLang, setLang, t } = useTranslations();

  useEffect(() => {
    setLangName(langs.find((l) => l.value === currentLang)?.label);
  }, [currentLang]);

  const LangIcon = langs.find((lang) => lang.value === currentLang)?.Icon;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size={commandMenu ? 'default' : 'icon'}
            title={`${t.general.langPicked} ${langName}`}
            className={cn(commandMenu && 'pl-0')}
          >
            {LangIcon && (
              <LangIcon
                width={size}
                height={size}
              />
            )}
            <span className={cn(commandMenu ? 'ml-2' : 'sr-only')}>
              {t.languagePicker.chooseLanguage}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {langs.map((lang) => (
            <DropdownMenuItem
              onClick={() => setLang(lang.value)}
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

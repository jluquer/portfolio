import { useEffect, useState } from 'react';
import { CommandIcon, Monitor, Moon, Printer, Sun } from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Button } from '../ui';
import { langs, useTranslations } from '../translations';
import { Theme, useTheme } from '../theme';
import { SOCIAL_ICONS, commandMenuKey } from '@/lib/constants';

const iconsCss = 'mr-2 size-4';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { currentLang, setLang, t } = useTranslations();
  const { setTheme } = useTheme();

  const languages = langs.filter((lang) => {
    if (currentLang === lang.value) return;

    return lang;
  });

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === commandMenuKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const selectTheme = (theme: Theme) => {
    setTheme(theme);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant={'outline'}
        size='icon'
        className='fixed bottom-5 right-4 rounded-full'
        title={t.commandMenu.buttonTitle}
        onClick={() => setOpen(!open)}
      >
        <CommandIcon />
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder={`${t.commandMenu.inputPlaceholder}...`} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={t.commandMenu.actions.heading}>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                setTimeout(() => {
                  window.print();
                }, 500);
              }}
            >
              <Printer className={iconsCss} />
              <span>{t.commandMenu.actions.print}</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading='Links'>
            {t.basics.profiles.map(({ network, url }) => {
              const SocialIcon = SOCIAL_ICONS[network];

              return (
                <CommandItem
                  key={url}
                  onSelect={() => {
                    setOpen(false);
                    window.open(url, '_blank');
                  }}
                >
                  <SocialIcon className={iconsCss} />
                  <span>{network}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandGroup heading={t.languagePicker.chooseLanguage}>
            {languages.map(({ Icon, value, label }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setOpen(false);
                  setLang(value);
                }}
              >
                <Icon className={iconsCss} /> <span>{label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t.commandMenu.theme.heading}>
            <CommandItem onSelect={() => selectTheme('light')}>
              <Sun className={iconsCss} />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => selectTheme('dark')}>
              <Moon className={iconsCss} />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => selectTheme('system')}>
              <Monitor className={iconsCss} />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

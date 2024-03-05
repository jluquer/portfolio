import { ThemePicker } from '@/components/theme';
import { LanguagePicker, useTranslations } from '@/components/translations';
import { commandMenuKey } from '@/lib/constants';

export const Header = () => {
  const { t } = useTranslations();
  const { education, experience, about } = t.cvSections;

  const links = [
    { href: '#about', text: about.title },
    { href: '#experience', text: experience.title },
    { href: '#education', text: education.title },
  ];

  return (
    <header className='no-print mx-auto mt-2 flex w-full gap-3 rounded-xl border border-ring py-1 pl-5 pr-2 font-medium md:max-w-2xl lg:max-w-4xl'>
      <nav className='flex flex-1 items-center'>
        <ul className='flex gap-2 text-sm font-medium'>
          {links.map(({ href, text }) => (
            <li key={href}>
              <a
                href={href}
                className='transition-colors hover:text-blue-600 dark:hover:text-blue-400'
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center'>
        <p className='mr-1 text-sm text-muted-foreground'>
          <span>{t.commandMenu.header.press} </span>
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>⌘</span>
            {commandMenuKey.toUpperCase()}
          </kbd>
          <span> {t.commandMenu.header.openCmd}</span>
        </p>
        <LanguagePicker size={16} />
        <ThemePicker size={16} />
      </div>
    </header>
  );
};

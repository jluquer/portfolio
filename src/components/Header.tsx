import { ThemePicker } from '@/components/theme';
import { LanguagePicker, useTranslations } from '@/components/translations';

export const Header = () => {
  const { t } = useTranslations();
  const { education, experience, about } = t.cvSections;

  const links = [
    { href: '#about', text: about.title },
    { href: '#experience', text: experience.title },
    { href: '#education', text: education.title },
  ];

  return (
    <header className='no-print mx-auto mt-2 flex w-full gap-3 rounded-xl border border-ring pl-5 pr-2 py-1 font-medium md:max-w-2xl lg:max-w-4xl'>
      <nav className='flex flex-1 items-center'>
        <ul className='flex gap-2 text-sm font-medium'>
          {links.map(({ href, text }) => (
            <li key={href}>
              <a
                href={href}
                className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className='flex'>
        <LanguagePicker size={16} />
        <ThemePicker size={16} />
      </div>
    </header>
  );
};

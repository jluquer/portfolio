import { ThemePicker } from '@/components/theme';
import { LanguagePicker, useTranslations } from '@/components/translations';

export const Header = () => {
  const { t } = useTranslations();
  const { education, experience } = t.cvSections;

  const links = [
    { href: '#education', text: education.title },
    { href: '#experience', text: experience.title },
  ];
  return (
    <header className='mx-auto mt-2 flex w-full gap-3 rounded-xl border border-slate-700 bg-slate-100 py-1 pl-5 pr-2 font-medium dark:border-white dark:bg-[#00091d]'>
      <nav className='flex flex-1 items-center'>
        <ul className='flex gap-2'>
          {links.map(({ href, text }) => (
            <li key={href}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-3'>
        <LanguagePicker />
        <ThemePicker />
      </div>
    </header>
  );
};

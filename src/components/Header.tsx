import { ThemePicker } from '@/components/theme';
import { LanguagePicker, useTranslations } from '@/components/translations';
import { buttonVariants } from './ui';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { t } = useTranslations();
  const { education, experience } = t.cvSections;

  const links = [
    { href: '#education', text: education.title },
    { href: '#experience', text: experience.title },
  ];
  const linkCss = cn(buttonVariants({ variant: 'ghost', size: 'sm', className: '' }));

  return (
    <header className='no-print mx-auto mt-2 flex w-full gap-3 rounded-xl border border-ring py-1 px-2 font-medium'>
      <nav className='flex flex-1 items-center'>
        <ul className='flex '>
          {links.map(({ href, text }) => (
            <li key={href}>
              <a
                href={href}
                className={linkCss}
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

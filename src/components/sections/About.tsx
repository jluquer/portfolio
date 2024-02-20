import { Section } from '.';
import { useTranslations } from '@/components/translations';

export function About() {
  const { t } = useTranslations();
  const { title, summary } = t.cvSections.about;
  return (
    <Section
      id='about'
      title={title}
    >
      {summary.map((paragraph) => (
        <p
          key={paragraph.split(' ').slice(0, 2).join('+')}
          className='section-text'
        >
          {paragraph}
        </p>
      ))}
    </Section>
  );
}

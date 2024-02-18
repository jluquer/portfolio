import { Section } from '.';
import { useTranslations } from '@/components/translations';

export function About() {
  const { t } = useTranslations();
  const { title, summary } = t.cvSections.about;
  return (
    <Section title={title}>
      <p className='section-text'>{summary}</p>
    </Section>
  );
}

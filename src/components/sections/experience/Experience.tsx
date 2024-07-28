import { Section } from '..';
import {
  MultipleProjectsCompany,
  SingleProjectCompany,
  useTranslations,
} from '@/components/translations';
import { MultipleProjectsExperience, SingleProjectExperience } from '.';

export function Experience() {
  const { t } = useTranslations();
  const { title, entries } = t.cvSections.experience;
  return (
    <Section
      id='experience'
      title={title}
    >
      <ul className='flex flex-col gap-6'>
        {entries.map((company) =>
          (company as MultipleProjectsCompany).projects?.length ? (
            <MultipleProjectsExperience
              experience={company as MultipleProjectsCompany}
            />
          ) : (
            <SingleProjectExperience
              experience={company as SingleProjectCompany}
            />
          ),
        )}
      </ul>
    </Section>
  );
}

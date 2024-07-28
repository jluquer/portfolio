import {
  MultipleProjectsCompany,
  useTranslations,
} from '@/components/translations';
import {
  ExperienceTime,
  ExperienceCompany,
  ExperienceFooter,
  ExperienceTitle,
  ExperienceProject,
} from '.';

interface Props {
  experience: MultipleProjectsCompany;
}

export const MultipleProjectsExperience = ({ experience }: Props) => {
  const { t } = useTranslations();
  const { url, company } = experience;

  return (
    <li>
      <ExperienceCompany
        company={company}
        title={`${t.general.view} ${company}`}
        url={url}
      />
      <ol className='relative ml-5 mt-2 border-s ps-6'>
        {experience.projects.map(
          ({ projectName, start, end, description, title, technologies }) => {
            return (
              <li key={start}>
                <article>
                  <header className='sticky top-0 mb-2'>
                    <span className='absolute -left-[33px] top-1/2 mr-3 flex size-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-blue-300 text-sm'></span>

                    <div className='flex justify-between'>
                      <div>
                        <ExperienceTitle title={title} />
                        <ExperienceProject projectName={projectName} />
                      </div>
                      <ExperienceTime
                        start={start}
                        end={end}
                      />
                    </div>
                  </header>

                  <ExperienceFooter
                    technologies={technologies}
                    description={description}
                  />
                </article>
              </li>
            );
          },
        )}
      </ol>
    </li>
  );
};

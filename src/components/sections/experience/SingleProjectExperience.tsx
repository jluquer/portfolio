import {
  SingleProjectCompany,
  useTranslations,
} from '@/components/translations';
import {
  ExperienceTime,
  ExperienceCompany,
  ExperienceFooter,
  ExperienceProject,
} from '.';
import { ExperienceTitle } from './ExperienceTitle';

interface Props {
  experience: SingleProjectCompany;
}

export const SingleProjectExperience = ({ experience }: Props) => {
  const { t } = useTranslations();
  const {
    company,
    start,
    end,
    description,
    title,
    url,
    technologies,
    projectName,
  } = experience;
  return (
    <li key={start}>
      <article>
        <header className='mb-2 flex items-start justify-between'>
          <div>
            <ExperienceCompany
              company={company}
              title={`${t.general.view} ${company}`}
              url={url}
            />
            <ExperienceTitle title={title} />
            <ExperienceProject projectName={projectName} />
          </div>

          <ExperienceTime
            start={start}
            end={end}
          />
        </header>

        <ExperienceFooter
          technologies={technologies}
          description={description}
        />
      </article>
    </li>
  );
};

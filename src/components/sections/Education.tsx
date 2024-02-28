import { Section } from '.';
import { useTranslations } from '../translations';
import { Badge } from '../ui/badge';

export function Education() {
  const { t } = useTranslations();
  const { title, entries } = t.cvSections.education;
  return (
    <Section
      id='education'
      title={title}
    >
      <ul className='flex flex-col gap-6'>
        {entries.map(
          ({
            degree,
            startDate,
            endDate,
            institution,
            summary,
            technologies,
          }) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear =
              endDate != null
                ? new Date(endDate).getFullYear()
                : t.general.present;
            const years = `${startYear} - ${endYear}`;

            return (
              <li key={startDate}>
                <article>
                  <header className='mb-1 flex items-start justify-between'>
                    <div>
                      <h3 className='font-medium text-primary'>{degree}</h3>
                      <h4 className='font-medium text-muted-foreground'>
                        {institution}
                      </h4>
                    </div>

                    <time className='min-w-[102px] text-right text-sm text-muted-foreground md:text-left'>
                      {years}
                    </time>
                  </header>

                  {summary && (
                    <footer>
                      {summary.map((paragraph) => (
                        <p
                          key={paragraph.split(' ').slice(0, 2).join('+')}
                          className='section-text'
                        >
                          {paragraph}
                        </p>
                      ))}
                      <div className='mt-1 flex flex-wrap gap-1'>
                        {technologies?.map((tech) => (
                          <Badge
                            key={tech}
                            variant='outline'
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </footer>
                  )}
                </article>
              </li>
            );
          },
        )}
      </ul>
    </Section>
  );
}

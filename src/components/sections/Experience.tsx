import { Section } from '.';
import { useTranslations } from '../translations';
import { Badge } from '../ui/badge';

export function Experience() {
  const { t } = useTranslations();
  const { title, entries } = t.cvSections.experience;
  return (
    <Section
      id='experience'
      title={title}
    >
      <ul className='flex flex-col gap-6'>
        {entries.map(
          ({ company, start, end, description, title, url, technologies }) => {
            const startYear = new Date(start).getFullYear();
            const endYear =
              end != null ? new Date(end).getFullYear() : t.general.present;
            const years = `${startYear} - ${endYear}`;
            return (
              <li key={start}>
                <article>
                  <header className='mb-1 flex items-start justify-between'>
                    <div>
                      <h3 className='font-medium text-primary'>
                        {url ? (
                          <a
                            href={url}
                            title={`${t.general.view} ${company}`}
                            target='_blank'
                            className='text-primary hover:cursor-pointer hover:underline'
                          >
                            {company}
                          </a>
                        ) : (
                          <span>{company}</span>
                        )}
                      </h3>
                      <h4 className='font-medium text-muted-foreground'>
                        {title}
                      </h4>
                    </div>

                    <time className='min-w-[102px] text-right text-sm text-muted-foreground md:text-left'>
                      {years}
                    </time>
                  </header>

                  {description && (
                    <footer>
                      {description.map((paragraph) => (
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

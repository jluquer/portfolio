import { Section } from '.';
import { useTranslations } from '../translations';

export function Experience() {
  const { t } = useTranslations();
  const { title, entries } = t.cvSections.experience;
  return (
    <Section
      id='experience'
      title={title}
    >
      <ul className='flex flex-col gap-8'>
        {entries.map(({ name, startDate, endDate, summary, position, url }) => {
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
                    <h3 className='font-medium text-primary'>
                      {url ? (
                        <a
                          href={url}
                          title={`${t.general.view} ${name}`}
                          target='_blank'
                          className='text-primary hover:cursor-pointer hover:underline'
                        >
                          {name}
                        </a>
                      ) : (
                        <span>{name}</span>
                      )}
                    </h3>
                    <h4 className='font-medium text-muted-foreground'>
                      {position}
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
                  </footer>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

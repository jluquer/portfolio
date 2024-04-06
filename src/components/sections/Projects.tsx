import { Section } from '.';
import { ProjectCard } from '../ProjectCard';
import { useTranslations } from '../translations';

export function Projects() {
  const { t } = useTranslations();
  return (
    <Section
      id='projects'
      title={t.cvSections.projects?.title}
    >
      <div className='-mx-3 mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
        {t.cvSections.projects?.entries.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={'link' in project ? project.link.href : undefined}
            />
          );
        })}
      </div>
    </Section>
  );
}

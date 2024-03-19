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
    </Section>
  );
}

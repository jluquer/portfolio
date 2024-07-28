import { Badge } from '@/components/ui/badge';

interface Props {
  description?: string[];
  technologies?: string[];
}
export const ExperienceFooter = ({ description, technologies }: Props) => {
  if (!description) return;

  return (
    <footer className='flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300'>
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
  );
};

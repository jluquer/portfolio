interface Props {
  title: string;
  company: string;
  url?: string;
}
export const ExperienceCompany = ({ url, title, company }: Props) => {
  return (
    <h3 className='font-medium text-blue-400 dark:text-blue-300'>
      {url ? (
        <a
          href={url}
          title={title}
          target='_blank'
          className='text-inherit hover:cursor-pointer hover:underline'
        >
          {company}
        </a>
      ) : (
        <span>{company}</span>
      )}
    </h3>
  );
};

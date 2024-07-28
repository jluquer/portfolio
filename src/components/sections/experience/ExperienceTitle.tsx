interface Props {
  title: string;
}
export const ExperienceTitle = ({ title }: Props) => {
  return <h4 className='font-medium text-zinc-600 dark:text-zinc-300'>{title}</h4>;
};

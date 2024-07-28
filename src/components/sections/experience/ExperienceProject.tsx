interface Props {
  projectName: string;
}
export const ExperienceProject = ({ projectName }: Props) => {
  if (!projectName) return;
  return <h5 className='text-sm text-muted-foreground'>{projectName}</h5>;
};

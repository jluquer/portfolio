import { DateStr, useTranslations } from '@/components/translations';

interface Props {
  start: DateStr;
  end?: DateStr;
}

export const ExperienceTime = ({ start, end }: Props) => {
  const { t } = useTranslations();
  const startYear = new Date(start).getFullYear();
  const endYear = end != null ? new Date(end).getFullYear() : t.general.present;
  const years = `${startYear} - ${endYear}`;
  return (
    <time className='min-w-[102px] text-right text-sm text-muted-foreground md:text-left'>
      {years}
    </time>
  );
};

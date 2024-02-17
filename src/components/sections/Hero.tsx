import { Globe } from 'lucide-react';
import { Section } from '.';
import { useTranslations } from '../translations';

export function Hero() {
  const { t } = useTranslations();
  const { name, label, location, image } = t.basics;
  const { city, region } = location;
  return (
    <Section>
      <div className='mt-10 flex items-center justify-between'>
        <div className='flex flex-col gap-2 pr-8'>
          <h1 className='text-4xl'>{name}</h1>
          <h2 className='text-muted-foreground text-balance text-lg font-medium'>
            {label}
          </h2>
          <span className='text-muted-foreground flex items-center gap-1 text-xs'>
            <Globe size={14} />
            {city}, {region}
          </span>
          <div>
            <span>icons - links</span>
          </div>
        </div>
        <figure>
          <img
            className='w-28 min-w-28 aspect-square rounded-xl  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500 from-0% to-primary to-90%'
            src={image}
            alt={name}
          />
        </figure>
      </div>
    </Section>
  );
}

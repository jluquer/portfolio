import { Globe, Mail, Phone } from 'lucide-react';
import { Section } from '.';
import { useTranslations } from '../translations';
import { Github, LinkedIn } from '../Icons';
import { buttonVariants } from '../ui';
import { cn } from '@/lib/utils';

export function Hero() {
  const { t } = useTranslations();
  const { name, label, location, image, profiles, email, phone } =
    t.basics ?? {};
  const { city, region } = location;
  const linkedInfo = profiles.find(({ network }) => network === 'LinkedIn');
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(' • ');

  const SOCIAL_ICONS: Record<string, React.JSX.Element> = {
    GitHub: <Github />,
    LinkedIn: <LinkedIn />,
  };

  const footerCss =
    'text-xs text-muted-foreground flex gap-1 mt-2 justify-center md:justify-start';
  const footerLinksCss = cn(
    buttonVariants({ variant: 'outline', size: 'icon', className: 'size-8' }),
  );

  return (
    <Section id='hero'>
      <div className='mt-10 flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='flex flex-col justify-center gap-2 pr-8 md:justify-start'>
          <h1 className='text-center text-4xl md:text-start'>{name}</h1>
          <h2 className='text-balance text-center text-lg font-medium text-muted-foreground md:text-start'>
            {label}
          </h2>
          <span className='flex items-center justify-center gap-1 text-xs text-muted-foreground md:justify-start'>
            <Globe size={14} />
            {city}, {region}
          </span>

          <footer className={`print ${footerCss}`}>{printInfo}</footer>
          <footer className={`no-print ${footerCss}`}>
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                target='_blank'
                rel='noopener noreferrer'
                className={footerLinksCss}
              >
                <Mail size={16} />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                title={`Llamar por teléfono a ${name} al número ${phone}`}
                target='_blank'
                rel='noopener noreferrer'
                className={footerLinksCss}
              >
                <Phone size={16} />
              </a>
            )}
            {profiles.map(({ network, url }) => {
              return (
                <a
                  key={network + url}
                  href={url}
                  title={`Visitar el perfil de ${name} en ${network}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={footerLinksCss}
                >
                  {SOCIAL_ICONS[network]}
                </a>
              );
            })}
          </footer>
        </div>
        <figure className='flex items-center justify-center'>
          <img
            className='aspect-square w-28 min-w-28 rounded-xl'
            src={image}
            alt={name}
          />
        </figure>
      </div>
    </Section>
  );
}

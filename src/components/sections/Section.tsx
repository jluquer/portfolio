import { cn } from '@/lib/utils';

type Props = React.PropsWithChildren<React.ComponentPropsWithoutRef<'section'>>;

export function Section({ children, title, className, ...props }: Props) {
  return (
    <section
      {...props}
      className={cn('mb-9 md:mb-12', className)}
    >
      {title && <h2 className='mb-2 text-2xl font-bold leading-6'>{title}</h2>}
      {children}
    </section>
  );
}

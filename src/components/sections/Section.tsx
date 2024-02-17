interface Props {
  children: React.ReactNode;
  title?: string;
}

export function Section({ children, title }: Props) {
  return (
    <section className='mb-9 md:mb-12'>
      {title && <h2 className='mb-2 text-base font-bold leading-6'>{title}</h2>}
      {children}
    </section>
  );
}

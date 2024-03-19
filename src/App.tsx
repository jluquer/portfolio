import { CommandMenu, Header } from '@/components';
import { ThemeProvider } from '@/components/theme';
import { TranslationsProvider } from '@/components/translations';
import {
  About,
  Education,
  Experience,
  Hero,
  Projects,
} from '@/components/sections';
import useMediaQuery from './hooks/useMediaQuery';

export default function App() {
  const displayHeader = useMediaQuery('lg');
  return (
    <ThemeProvider>
      <TranslationsProvider>
        <div className='text-dark relative pt-2 dark:text-white'>
          <div className='container mx-auto w-full md:max-w-2xl lg:max-w-4xl'>
            {displayHeader && <Header />}
            <CommandMenu />
            <main>
              <Hero />
              <About />
              <Experience />
              <Education />
              <Projects />
            </main>
          </div>
        </div>
      </TranslationsProvider>
    </ThemeProvider>
  );
}

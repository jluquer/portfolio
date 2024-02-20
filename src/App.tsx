import { Header } from '@/components';
import { ThemeProvider } from '@/components/theme';
import { TranslationsProvider } from '@/components/translations';
import { About, Education, Experience, Hero } from '@/components/sections';

export default function App() {
  return (
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
      <TranslationsProvider>
        <div className='text-dark relative pt-2 dark:text-white'>
          <div className='container mx-auto w-full md:max-w-2xl lg:max-w-4xl'>
            <Header />
            <main>
              <Hero />
              <Experience />
              <Education />
              <About />
            </main>
          </div>
        </div>
      </TranslationsProvider>
    </ThemeProvider>
  );
}

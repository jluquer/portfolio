import './App.css';
import { LanguagePicker } from '@/components';
import { TranslationsProvider } from '@/translations/context';

export default function App() {
  return (
    <TranslationsProvider>
      <LanguagePicker />
    </TranslationsProvider>
  );
}

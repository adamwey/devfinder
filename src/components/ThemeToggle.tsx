import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import { ThemeContext } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className='text-sm tracking-wider'
      onClick={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? (
        <div className='flex items-center space-x-3 text-primary-300 hover:text-primary-400 transition-colors duration-200'>
          <p>DARK</p>
          <MoonIcon className='w-6 h-6' />
        </div>
      ) : (
        <div className='flex items-center space-x-3 hover:text-primary-200 transition-colors duration-200'>
          <p>LIGHT</p>
          <SunIcon className='w-6 h-6' />
        </div>
      )}
    </button>
  );
}

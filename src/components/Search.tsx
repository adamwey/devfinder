import React, { useState } from 'react';
import { SearchIcon } from './Icons';

interface SearchProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Search({ value, onChange, onSubmit }: SearchProps) {
  return (
    <form
      className='w-full max-w-screen-md h-16 rounded-[15px] bg-dark-mode-100 dark:bg-dark-mode-200 flex items-center overflow-hidden pl-3 lg:pl-8 pr-[10px] mb-6'
      onSubmit={onSubmit}
    >
      <div className='text-primary-100 mr-2'>
        <SearchIcon />
      </div>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search GitHub username...'
        className='w-full h-full placeholder:text-sm dark:bg-dark-mode-200 focus:outline-none text-primary-400 dark:text-dark-mode-100 placeholder:text-primary-300 dark:placeholder:text-dark-mode-100 caret-primary-100'
      />

      <button className='bg-primary-100 hover:bg-primary-700 text-dark-mode-100 transition-colors duration-200 px-4 py-2 rounded-[10px]'>
        Search
      </button>
    </form>
  );
}

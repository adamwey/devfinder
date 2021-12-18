import { ThemeToggle } from '.';

export function Header() {
  return (
    <header className='w-full mb-9'>
      <nav className='flex justify-between items-center'>
        <h1 className='text-2xl tracking-wide font-bold'>devfinder</h1>

        <ThemeToggle />
      </nav>
    </header>
  );
}

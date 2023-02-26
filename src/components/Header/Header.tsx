import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '~/utils';

const Header = () => {
  const { asPath: currentUrl } = useRouter();

  return (
    <header className='flex h-10 items-center justify-between'>
      <Link href='/'>Logo</Link>
      <nav>
        <ul className='flex space-x-8'>
          <li>
            <Link
              href='/'
              className={cn(
                'font-medium transition-colors',
                'hover:text-black dark:hover:text-white',
                currentUrl === '/' ? 'text-black dark:text-white' : ''
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className={cn(
                'font-medium transition-colors',
                'hover:text-black dark:hover:text-white',
                currentUrl === '/about' ? 'text-black dark:text-white' : ''
              )}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <button>Toggle</button>
    </header>
  );
};

export default Header;

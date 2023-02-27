import Link from 'next/link';
import { cn } from '~/utils';

const Logo = () => {
  return (
    <Link
      href='/'
      className={cn(
        'outline-2 outline-offset-1 outline-current',
        'focus:outline'
      )}
    >
      <svg
        role='img'
        viewBox='0 0 24 24'
        className='h-6 w-6 fill-black dark:fill-white'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Vercel</title>
        <path d='M24 22.525H0l12-21.05 12 21.05z' />
      </svg>
    </Link>
  );
};

export default Logo;

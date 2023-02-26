import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
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

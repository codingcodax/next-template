import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex h-10 items-center justify-between'>
      <Link href='/'>Logo</Link>
      <nav>
        <ul className='flex space-x-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <button>Toggle</button>
    </header>
  );
};

export default Header;

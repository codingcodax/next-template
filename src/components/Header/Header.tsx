import { useRouter } from 'next/router';

import Logo from './Logo';
import Nav from './Nav';
import ToggleThemeButton from './ToggleThemeButton';

const Header = () => {
  const { asPath: currentUrl } = useRouter();

  return (
    <header className='flex h-10 items-center justify-between'>
      <Logo />
      <Nav currentUrl={currentUrl} />
      <ToggleThemeButton />
    </header>
  );
};

export default Header;

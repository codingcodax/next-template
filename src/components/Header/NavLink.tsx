import Link from 'next/link';
import { cn } from '~/utils';

type Props = {
  currentUrl: string;
  name: string;
  href: string;
};

const NavLink = ({ currentUrl, name, href }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'font-medium transition-colors',
          'hover:text-black dark:hover:text-white',
          currentUrl === href ? 'text-black dark:text-white' : ''
        )}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;

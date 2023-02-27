import NavLink from './NavLink';

type Props = {
  currentUrl: string;
};

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Nav = ({ currentUrl }: Props) => {
  return (
    <nav>
      <ul className='flex space-x-8'>
        {links.map((link) => (
          <NavLink key={link.name} currentUrl={currentUrl} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

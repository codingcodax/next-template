import { Link } from '~/components/ui';

const Footer = () => {
  return (
    <footer>
      <p className='text-center'>
        Handcrafted with <span className='font-mono'>🤍</span> by{' '}
        <Link isExternal href='https://codingcodax.dev/'>
          @codingcodax
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

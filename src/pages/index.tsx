import { type NextPage } from 'next';
import Head from 'next/head';
import { Button, Link } from '~/components/ui';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <meta
          name='description'
          content='Next.js template with T3 Stack and template inspired by Shadcn.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-xl font-bold text-black dark:text-white'>
          Next.js Template
        </h1>
        <h2>
          Simple template built with{' '}
          <Link isExternal href='https://www.tailwind-variants.org/'>
            Tailwind Variants
          </Link>
          ,{' '}
          <Link isExternal href='https://heroicons.com/'>
            Hero Icons
          </Link>{' '}
          and{' '}
          <Link isExternal href='https://www.radix-ui.com/'>
            Radix UI
          </Link>
          .
        </h2>
        <p>
          With this, you will have the best way to start a full stack
          application with type-safe thanks to{' '}
          <Link isExternal href='https://create.t3.gg/'>
            T3 Stack
          </Link>
          , accessible, with SEO, and the facility to create your component
          library.
        </p>
        <Button href='/about' className='mt-4' intent='secondary'>
          Learn more
        </Button>
      </main>
    </>
  );
};

export default Home;

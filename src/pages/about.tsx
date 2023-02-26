import { type NextPage } from 'next';
import Head from 'next/head';
import { Button, Link } from '~/components/ui';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Next.js Template</title>
        <meta
          name='description'
          content='About page for Next.js template with T3 Stack and template inspired by Shadcn.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-bold text-xl font-bold dark:text-white'>About</h1>
        <p>
          The template use{' '}
          <Link isExternal href='https://www.tailwind-variants.org/'>
            Tailwind Variants
          </Link>{' '}
          (an alternative to{' '}
          <Link isExternal href='https://cva.style/'>
            CVA
          </Link>
          ) to built our UI components with{' '}
          <Link isExternal href='https://tailwindcss.com/'>
            Tailwind CSS
          </Link>
          . Also use{' '}
          <Link isExternal href='https://heroicons.com/'>
            Hero icons
          </Link>{' '}
          but, it can be replaced with any other icon library, like{' '}
          <Link isExternal href='https://lucide.dev/'>
            Lucide
          </Link>
          .
          <br />
          And last but not least, use{' '}
          <Link isExternal href='https://www.radix-ui.com/'>
            Radix UI
          </Link>{' '}
          to make our components accessible.
        </p>
        <br />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <div>
            <p>Other technologies:</p>
            <ul className='list-inside list-disc'>
              <li>
                <Link
                  isExternal
                  href='https://github.com/pacocoursey/next-themes'
                >
                  Next themes
                </Link>
              </li>
              <li>
                <Link isExternal href='https://github.com/garmeeh/next-seo'>
                  Next SEO
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  href='https://github.com/dcastil/tailwind-merge'
                >
                  Tailwind merge
                </Link>
              </li>
              <li>
                <Link isExternal href='https://github.com/lukeed/clsx'>
                  clsx
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p>From T3 Stack :</p>
            <ul className='list-inside list-disc'>
              <li>
                <Link isExternal href='https://next-auth.js.org/'>
                  Next auth
                </Link>
              </li>
              <li>
                <Link isExternal href='https://next-auth.js.org/'>
                  Prisma
                </Link>
              </li>
              <li>
                <Link isExternal href='https://trpc.io/'>
                  tRPC
                </Link>
              </li>
              <li>
                <Link isExternal href='https://zod.dev/'>
                  Zod
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Button href='/' className='mt-4' intent='secondary'>
          Go back
        </Button>
      </main>
    </>
  );
};

export default About;

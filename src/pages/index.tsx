import { type NextPage } from 'next';
import Head from 'next/head';

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
        <p>Home page</p>
      </main>
    </>
  );
};

export default Home;

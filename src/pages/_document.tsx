import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-zinc-50 font-sans text-zinc-700 antialiased dark:bg-zinc-900 dark:text-zinc-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

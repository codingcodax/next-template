import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body className='min-h-screen font-sans antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

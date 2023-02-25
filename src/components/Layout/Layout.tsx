import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='mx-auto grid min-h-screen max-w-3xl grid-rows-[auto_1fr_auto] gap-y-20 p-10'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

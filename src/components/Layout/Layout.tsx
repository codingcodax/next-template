import { cn } from '~/utils';

import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div
      className={cn(
        'mx-auto grid min-h-screen max-w-3xl grid-rows-[auto_1fr_auto] gap-y-10 p-5',
        'md:gap-y-20 md:p-10'
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import Header from "@/components/layout/header/Header";
import Footer from '@/components/layout/footer/Footer';
import {FC, PropsWithChildren} from 'react';

const Layout: FC<PropsWithChildren> = ({children}) => {
  return <>
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </>
};

export default Layout;

import styles from '../styles/component/layout.module.css'
import Head from 'next/head'
import NavBar from '../components/navbar'
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/test-logo.png" />
      </Head>
      <NavBar></NavBar>
      <main>{children}</main>
      <Footer></Footer>
    </div>

  )
}

export default Layout
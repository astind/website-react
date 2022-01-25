import styles from './layout.module.css'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </div>

  )
}

export default Layout
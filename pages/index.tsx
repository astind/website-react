import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/style.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Astin.dev</title>
        <meta name="description" content="astin.dev homepage" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to astin.dev
        </h1>

        <p className={styles.description}>
          Work in progress personal website
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About Me &rarr;</h2>
              <p>Personal info that I'm okay sharing</p>
            </a>
          </Link>

          <Link href="/resume">
            <a className={styles.card}>
              <h2>Resume &rarr;</h2>
              <p>Education and Professional Work Experence</p>
            </a>
          </Link>

          <Link href="/portfolio">
            <a className={styles.card}>
              <h2>Portfolio &rarr;</h2>
              <p>Check out personal project I have been working on</p>
            </a>
          </Link>
          
          <Link href="/Contact">
            <a className={styles.card}>
              <h2>Links &rarr;</h2>
              <p>
                Contact info, and links to my other pages.
              </p>
            </a>
          </Link>
          
        </div>
      </main>
    </div>
  )
}

export default Home
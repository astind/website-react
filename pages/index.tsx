import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/style.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Astin.dev</title>
        <meta name="description" content="astin.dev homepage" />
      </Head>

      <div className='hero has-background-info is-medium is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title'>
              Welcome to astin.dev
            </h1>
            <h2 className='subtitle'>
              My name is Dillon Astin, and I'm a software engineer
            </h2>
          </div>
        </div>
      </div>


      <div className='section'>
        <div className='tile is-ancestor'>
          <Link href="/about">
            <a className='tile is-parent'>
              <div className='tile is-child box'>
                <div className='title'>About Me</div>
                <div className='content'>
                  <p>Learn more about me.</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/resume">
            <a className='tile is-parent'>
              <div className='tile is-child box'>
                <div className='title'>Resume</div>
                <div className='content'>
                  <p>My education and professional work experence.</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/portfolio">
            <a className='tile is-parent'>
              <div className='tile is-child box'>
                <div className='title'>Portfolio</div>
                <div className='content'>
                  <p>Check out personal projects I am working on.</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/contact">
            <a className='tile is-parent'>
              <div className='tile is-child box'>
                <div className='title'>Contact</div>
                <div className='content'>
                  <p>Contact info, and links to my other pages.</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>


      <main className={styles.main}>

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
              <p>Check out personal project I have been working on.</p>
            </a>
          </Link>

          <Link href="/contact">
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

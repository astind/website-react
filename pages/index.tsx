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

      <div className='hero is-small has-background-light'>
        <div className='hero-body'>
          <div className='columns'>
            <div className='column'></div>
            <div className='column is-half is-flex'>
              <div className='is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center'>
                <span className='title is-1 has-text-primary'>
                  Welcome to astin.dev
                </span>
                <span className='subtitle is-3 has-text-primary'>
                  My name is Dillon Astin, and I'm a software engineer
                </span>
              </div>
            </div>
            <div className='column'>
              <figure className='image is-4by5'>
                <img src="" alt="picture of me" />
              </figure>
            </div>
          </div>

        </div>
      </div>


      <div className='section'>
        <div className='columns'>

          <Link href="/resume">
            <a className='column'>
            <div className='box has-background-primary'>
                <div className='is-flex'>
                  <span className='is-size-2 s-box'>Resume</span>
                  <div className='is-flex is-align-items-center is-flex-grow-1'>
                    <div className='is-size-6'>My education and professional work experience</div>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/portfolio">
            <a className='column'>
              <div className='box has-background-primary'>
                <div className='is-flex'>
                  <span className='is-size-2 s-box'>Portfolio</span>
                  <div className='is-flex is-align-items-center is-flex-grow-1'>
                    <div className='is-size-6'>Check out personal projects I have working on</div>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/contact">
            <a className='column'>
            <div className='box has-background-primary'>
                <div className='is-flex'>
                  <span className='is-size-2 s-box'>Contact</span>
                  <div className='is-flex is-align-items-center is-flex-grow-1'>
                    <div className='is-size-6'>Contact info, and links to my other pages</div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div className='section'>
        <div className='columns is-vcentered is-centered'>
          <div className='column'>
            <div className='container has-text-centered is-size-1'>About Me</div>
          </div>
          <div className='column is-flex'>
            {/* add image here */}
            <figure className='image is-square'>
              <img src="" alt="family pic" />
            </figure>
          </div>
          <div className='column is-half is-felx'>
            <div className='about-box'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-box {
          padding-right: 150px;
        }
        .s-box {
          margin-right: 40px;
        }
      `}</style>

    </div>
  )
}

export default Home

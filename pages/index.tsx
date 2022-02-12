import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
            <div className='column is-two-fifths is-flex'>
              <div className='is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center'>
                <span className='title is-1 has-text-primary'>
                  Welcome to astin.dev
                </span>
                <span className='subtitle is-3 has-text-primary'>
                  My name is Dillon Astin, and I&apos;m a software engineer
                </span>
              </div>
            </div>
            <div className='column'>
              <figure className='image is-3by4'>
                <Image src="/homephoto.png" alt="picture of me" layout='fill'/>
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
          <div className='column is-one-fifth'>
            <div className='container has-text-centered is-size-1'>About Me</div>
          </div>
          <div className='column'>
            {/* add image here */}
            <figure className='image is-4by5'>
              <Image src="/family.jpg" alt="family pic" layout='fill'/>
            </figure>
          </div>
          <div className='column is-half is-felx'>
            <div className='about-box'>
              <p>
                My name is Dillon Astin, and I&apos;m a Full-Stack Developer from Ohio. I enjoy web and server development. I currently specialize in Angular front-ends and Node.js back-ends.
                In my free time I enjoy spending time with my family, being outdoors, and teaching myself HTML5 game development. I have a beautiful wife and two dogs
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-box {
          padding: 40px;
        }
        .s-box {
          margin-right: 40px;
        }
      `}</style>

    </div>
  )
}

export default Home

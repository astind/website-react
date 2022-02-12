import { NextPage } from "next";
import Head from "next/head";
import { FaLinkedin } from 'react-icons/fa';


const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="astin.dev portfolio" />
      </Head>
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <span className="is-size-2">Contact</span>
          </div>
        </div>
      </section>
      <div className="container bd-height">
        <section className="section has-text-centered">
          <a className="button is-medium is-success" href="https://www.linkedin.com/in/dillon-astin/">
            <span className="icon is-meduim">
              <FaLinkedin></FaLinkedin>
            </span>
            <span>Contact me on LinkedIn</span>
          </a>
        </section>
        <section className="section has-text-centered">
          <p>Coming soon: Email me directly from my website!</p>
        </section>
      </div>

      <style jsx>{`
        .bd-height {
          min-height: 1000px
        }
      `}</style>
    </div>
  )
}

export default Contact
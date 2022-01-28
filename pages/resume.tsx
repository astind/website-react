import { NextPage } from "next";
import Head from 'next/head'


const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta name="description" content="astin.dev resume" />
      </Head>
      <section className="hero is-small">
        <div className="hero-body">
          <p className="title">Resume</p>
          <p className="subtitle">Education and Work History</p>
        </div>
      </section>
      <section className="section">
        <h2 className="title">Education</h2>

        <div className="block">
          <div className="message">
            <header className="message-header">
              <p>Brigham Young University</p>
            </header>
            <div className="message-body">
              B.S. of Computer Science
            </div>
          </div>
        </div>

        <div className="block">
          <div className="message">
            <div className="message-header">
              <p>Arizona State University</p>
            </div>
            <div className="message-body">
              Masters of Computer Science
            </div>
          </div>
        </div>

      </section>
      
      <section className="section">
        <h2 className="title">Work</h2>

        <div className="block">
          <div className="message">
            <div className="message-header">
              <p>Altamira Technolgies Corporation</p>
            </div>
            <div className="message-body">
              Software Engineer
            </div>
          </div>
        </div>

      </section>

      <section className="section">
        <h2 className="title">Skills</h2>
      </section>

    </div>
  )
}

export default Resume
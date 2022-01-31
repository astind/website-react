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
          <h1 className="title">Resume</h1>
          <p className="subtitle">Education and Work History</p>
        </div>
      </section>

      <section className="section">
        <h2 className="title">Education</h2>

        <div className="message is-info">
          <div className="message-header">
            <p>Brigham Young University</p>
            <span>Aug 2012 – Dec 2018</span>
          </div>
          <div className="message-body">
            <strong>B.S. of Computer Science</strong>
          </div>
        </div>

        <div className="message is-info">
          <div className="message-header">
            <p>Arizona State Univeristy</p>
            <span>Aug 2020 – Present</span>
          </div>
          <div className="message-body">
            <strong>Masters of Computer Science</strong>
          </div>
        </div>

      </section>

      <section className="section">
        <h2 className="title">Professional Work</h2>

        <div className="message is-info">
          <div className="message-header">
            <p>Altamira Technologies Corporation</p>
            <span>May 2017 – Present</span>
          </div>
          <div className="message-body">
            <p><strong>Software Engineer</strong></p>
            <div className="content">
              <ul className="content">
                <li>Test</li>
              </ul>
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
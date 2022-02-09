import { NextPage } from "next";
import Head from 'next/head';
import { FaRegFileAlt, FaFileDownload } from 'react-icons/fa';


const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta name="description" content="astin.dev resume" />
      </Head>

      <section className="hero is-small">
        <div className="hero-body">

          <div className="columns is-vcentered">
            <div className="column"></div>
            <div className="column is-half is-flex">
              <div className="is-flex is-flex-grow-1 is-flex-direction-column is-align-items-center">
                <div className="is-size-2">Resume</div>
                <div className="is-size-5">Education and Work History</div>
              </div>
            </div>
            <div className="column level">
              <div className="level-right">
                <button className="button is-info">
                  <span className="icon">
                    <FaFileDownload></FaFileDownload>
                  </span>
                  <span>Download</span>
                </button>
              </div>

            </div>
          </div>

          {/* <div className="title is-2">
            <div className="level">
              <div className="level-center">
                Resume
              </div>
              <div className="level-right">
                <button className="button is-info">
                  <span className="icon">
                    <FaFileDownload></FaFileDownload>
                  </span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <div className="container">

        <section className="block">
          <h2 className="title is-4 has-text-white">Education</h2>

          <div className="message is-info">
            <div className="message-header">
              <p>Brigham Young University</p>
              <span>Aug 2012 - Dec 2018</span>
            </div>
            <div className="message-body has-text-black">
              <strong>B.S. of Computer Science</strong>
            </div>
          </div>

          <div className="message is-info">
            <div className="message-header">
              <p>Arizona State Univeristy</p>
              <span>Aug 2020 - Present</span>
            </div>
            <div className="message-body has-text-black">
              <strong>Masters of Computer Science</strong>
            </div>
          </div>

        </section>

        <section className="block">
          <h2 className="title is-4 has-text-white">Professional Work</h2>

          <div className="message is-info">
            <div className="message-header">
              <p>Altamira Technologies Corporation</p>
              <span>May 2017 - Present</span>
            </div>
            <div className="message-body has-text-black">
              <p><strong>Software Engineer</strong></p>
              <div className="content">
                <ul className="content">
                  <li>Full-Stack Developer</li>
                  <li>Lead front-end developer for a USAF software system web app using Angular</li>
                  <li>Responsible for primary UI/UX design for me team</li>
                  <li>Build multiple REST API&apos;s in Node.js and Python</li>
                  <li>Microservice architecture</li>
                  <li>Agile Workflow</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="message is-info">
            <div className="message-header">
              <p>JD Connel Construction</p>
              <span>June 2012 - Aug 2016</span>
            </div>
            <div className="message-body has-text-black">
              <p><strong>Worker</strong></p>
              <div className="content">
                <ul>
                  <li>Responsible for upkeep of multiple job sites</li>
                  <li>Supervised peers with less experience</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        <section className="block">
          <h2 className="title is-4 has-text-white">Skills</h2>

          <div className="message is-info">
            <div className="message-header">
              <p>Web Development</p>
            </div>
            <div className="message-body has-text-black">
              <p><strong>Front-end</strong></p>
              <div className="content">
                <ul>
                  <li>Over 3 years experience in Angular</li>
                  <li>React (This website was built with React)</li>
                  <li>HTML/CSS, Javascript and Typescript</li>
                </ul>
              </div>
              <p><strong>Back-end</strong></p>
              <div className="content">
                <ul>
                  <li>API&apos;s experience in Node.js and Python</li>
                  <li>Database experience with PostgreSQL, and Elasticsearch</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="message is-info">
            <div className="message-header">
              <p>Software Development</p>
            </div>
            <div className="message-body has-text-black">
              <p><strong>Mobile</strong></p>
              <div className="content">
                <ul>
                  <li>Andriod Development using Andriod Studio and Java</li>
                  <li>Andriod Game Development using LÖVE and Defold</li>
                </ul>
              </div>
              <p><strong>Desktop</strong></p>
              <div className="content">
                <ul>
                  <li>C#, Java, and C++</li>
                  <li>Python and Lua</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="message is-info">
            <div className="message-header">
              <p>Technology</p>
            </div>
            <div className="message-body has-text-black">
              <p><strong>DevOps</strong></p>
              <div className="content">
                <ul>
                  <li>Over 4 years experience with Docker</li>
                  <li>Experience mangaging containerized applications with Kubernetes and Docker swarm</li>
                </ul>
              </div>
              <p><strong>Development Tools</strong></p>
              <div className="content">
                <ul>
                  <li>Version Control using Git</li>
                  <li>CI/CD using Jenkis and GitLab</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="message is-info">
            <div className="message-header">
              <p>Other</p>
            </div>
            <div className="message-body has-text-black">
              <p className="block"><strong>Security Clearance Obtained (TS/SCI)</strong></p>
              <p><strong>Certifications</strong></p>
              <div className="content">
                <ul>
                  <li>Security+</li>
                </ul>
              </div>
              <p><strong>Languages</strong></p>
              <div className="content">
                <ul>
                  <li>Fluent in Spanish</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

      </div>

      <div className="section has-text-centered">
        <button className="button is-large is-info">
          <span className="icon is-medium">
            <FaRegFileAlt></FaRegFileAlt>
          </span>
          <span>Download Resume</span>
        </button>
      </div>

      <div className="block"></div>

    </div>
  )
}

export default Resume
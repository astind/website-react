import { NextPage } from "next";
import Head from "next/head";
import { FaGithub } from 'react-icons/fa';



const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="astin.dev portfolio" />
      </Head>
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <span className="is-size-2">Portfolio</span>
          </div>
        </div>
      </section>
      <div className="container bd-height">
        <section className="section has-text-centered">
          <p className="block">
            This part of the website it currently a Work in Progress!<br></br>
            Please check back later for more content!
          </p>
          <p className="block">
            In the mean time feel free to check out my github page. Which includes the code used for this website (written in React)
          </p>
          <a href="https://github.com/astind" className="button is-medium is-success">
            <span className="icon is-medium">
              <FaGithub></FaGithub>
            </span>
            <span>GitHub Page</span>
          </a>
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

export default Portfolio
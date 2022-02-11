import { NextPage } from "next";
import Head from "next/head";


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
      <div className="container">
        <section className="section has-text-centered">
          <p>This part of the website it currently a Work in Progress!<br></br>
             Please check back later for more content!
          </p>
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
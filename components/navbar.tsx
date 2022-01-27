import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {

  return (
    <nav className="navbar is-dark" role="navigation" aria-label='main navigation'>
      
      <div className="navbar-brand">
        <Image src="/test-logo.png" alt="astin.dev logo" width={76} height={51}></Image>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="appnav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="appnav" className="navbar-menu">

        <div className="navbar-start">

          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>

          <Link href="/about">
            <a className="navbar-item">About</a>
          </Link>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>Work</a>
            <div className='navbar-dropdown'>
              <Link href="/resume">
                <a className='navbar-item'>Resume</a>
              </Link>
              <Link href='/portfolio'>
                <a className='navbar-item'>Portfolio</a>
              </Link>
            </div>
          </div>

        </div>

        <div className='navbar-end'>
          <Link href="/contact">
            <a className="navbar-item">Contact</a>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavBar

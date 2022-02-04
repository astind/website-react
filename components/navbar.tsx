import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {

  return (
    <nav className="navbar" role="navigation" aria-label='main navigation'>

      <div className="navbar-brand">
        <Image src="/test-logo.png" alt="astin.dev logo" width={76} height={51}></Image>
        <div className='navbar-item'>astin.dev</div>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="appnav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="appnav" className="navbar-menu">

        <div className='navbar-end'>
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>

          <Link href="/contact">
            <a className="navbar-item">Contact</a>
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

          <a className='navbar-item' href='https://github.com/astind'>
            <span className='icon'>
              <FaGithub></FaGithub>
            </span>
          </a>

        </div>

      </div>
    </nav>
  )
}

export default NavBar

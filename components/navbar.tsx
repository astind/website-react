import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavBar = () => {


  const openMenu = () => {
    document.querySelector('.navbar-menu')?.classList.toggle("is-active");
  }

  return (
    <nav className="navbar" role="navigation" aria-label='main navigation'>

      <div className="navbar-brand">
        <Image src="/test-logo.png" alt="astin.dev logo" width={76} height={51}></Image>
        <div className='navbar-item'>astin.dev</div>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navmenu" onClick={openMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navmenu" className="navbar-menu">

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

          <a className='navbar-item' href='https://www.linkedin.com/in/dillon-astin/'>
            <span className='icon'>
              <FaLinkedin></FaLinkedin>
            </span>
          </a>

        </div>

      </div>
    </nav>
  )
}

export default NavBar

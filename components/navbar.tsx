import Link from 'next/link'

const NavBar = () => {

  return (
    <nav className="navbar is-dark" role="navigation" aria-label='main navigation'>
      
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            Astin.dev
          </a>
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="appnav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div id="appnav" className="navbar-menu">

        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              Home
            </a>
          </Link>

          <Link href="/about">
            <a className="navbar-item">
              About
            </a>
          </Link>

        </div>

        <div className='navbar-item'></div>

      </div>
    </nav>
  )
}

export default NavBar

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function About() {
  return(
    <div>About</div>
  );
}

function Home() {
  return(
    <div>Home</div>
  );
}

function Resume() {
  return(
    <div>Resume</div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              astin.dev
            </div>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

              <Link className="navbar-item" to="/resume">
                Resume
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <a className="navbar-item">
                    Portfolio
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    GitHub
                  </a>
                  <a className="button is-light">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

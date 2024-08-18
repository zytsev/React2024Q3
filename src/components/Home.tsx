import { NavLink, Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/control" className="nav-link">
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/uncontrol" className="nav-link">
                UnCForm
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Home;

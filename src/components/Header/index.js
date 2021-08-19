import { Link } from 'react-router-dom';

import './index.css';

export default function Header() {
  return (
    <header>
      <h1 className="app__title">
        <Link to="/" className="app__logo">
          My Movies collection
        </Link>
      </h1>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">Search</li>
          <li className="menu__item">
            <a
              href="javascript;"
              className="menu__item__link"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

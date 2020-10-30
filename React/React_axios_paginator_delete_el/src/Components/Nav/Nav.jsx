import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
  <>
  <h1>Nav</h1>
  <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
  </>
  )
}

export default Nav;
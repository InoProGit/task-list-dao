import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function header() {
  return (
    <header className="flex text-white w-full">
        <ul className="flex ml-auto">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/tasks">TASKS</Link>
          </li>
          <li>
            <Link to="/tasks/task=id2">TASK ID = 2</Link>
          </li>
        </ul>
    </header>
  )
}

export default header
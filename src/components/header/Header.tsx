import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { useAppSelector } from '../../hooks';

function Header() {
  const tasksCount = useAppSelector((state) => state.count)
  
  return (
    <header className="flex text-white w-full">
      <div className="counter-container flex p-2">
        <div className="counter-item mr-1 ">Is Done ( {tasksCount.done} )</div>
        <div className="counter-item mr-1 ">Undone ( {tasksCount.undone} )</div>
        <div className="counter-item mr-1 ">All tasks ( {tasksCount.done + tasksCount.undone} )</div>
      </div>
        <nav className="flex ml-auto">
          <Link to="/">HOME</Link>
          <Link to="/tasks">TASKS PAGE</Link>
        </nav>
    </header>
  )
}

export default Header
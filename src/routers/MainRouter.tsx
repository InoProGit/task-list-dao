import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TasksPage from '../pages/tasks-page/TasksPage'
import SingleTaskPage from '../pages/single-task-page/SingleTaskPage'

function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/tasks" element={ <TasksPage/> }/>
        <Route path="/tasks/:id" element={ <SingleTaskPage/> }/>
    </Routes>
  )
}

export default MainRouter
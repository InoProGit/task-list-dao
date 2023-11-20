import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TasksPage from '../pages/tasks-page/TasksPage'
import SingleTaskPage from '../pages/SingleTaskPage'

const taskID = 2

function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/tasks" element={ <TasksPage/> }/>
        <Route path={`/tasks/task=id${taskID}`} element={ <SingleTaskPage/> }/>
    </Routes>
  )
}

export default MainRouter
import React, { MouseEventHandler, useEffect, useState } from 'react'
import './TasksPage.css'
import data from '../../tasks.json';
import TaskForLoop from '../../components/task-for-loop/TaskForLoop'
import { ITask } from '../../components/types/task.interface'
import MainForm from "../../components/form/MainForm";

function TasksPage() {
  const [tasks, setTasks] = useState<ITask[]>(data);

  const removeTask = (id: number) => {
    console.log(id)
    setTasks(tasks.filter(task => {
      return task.id !== id ? task : null
    })
    )
    console.log(tasks)
    return id
  }

  const addTask = (taskName: string) => {
    setTasks([{ id: Date.now(), name: taskName, done: false }, ...tasks])
    console.log(tasks)
    return taskName
  }

  useEffect(() => { console.log(tasks) })

  return (
    <div id="tasks-wrap">
      <h1 className="text-center text-white border-solid border-black border-2 p-1">TasksPage</h1>
      <div className="add-task-wrap">
        <MainForm addTask={addTask} />
      </div>
      <div className="tasks">
        {tasks.map((task: ITask) => {
          return <TaskForLoop key={task.id} task={task} removeTask={removeTask} />;
        })}
      </div>
    </div>
  )
}

export default TasksPage
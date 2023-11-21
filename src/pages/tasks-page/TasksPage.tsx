// import React, { MouseEventHandler, useEffect, useState } from 'react'
import './TasksPage.css'
// import data from '../../tasks.json';
import { useAppSelector } from '../../hooks'
import TaskForLoop from '../../components/task-for-loop/TaskForLoop'
import { ITask } from '../../components/types/task.interface'
import MainForm from "../../components/form/MainForm";
// import { useDispatch, useSelector } from 'react-redux';
// import { tasksStore } from '../../store/tasks/tasksSlice';

function TasksPage() {
  const tasksStorage = useAppSelector( state => state )
  // const dispatch = useDispatch()

  // console.log(addTask)
  
  // console.log("tasksStorage - ")

  // console.log(tasksStorage)

  // const [tasks, setTasks] = useState<ITask[]>([]);

  // const removeTask = (id: number) => {
  //   // console.log(id)
  //   setTasks(tasks.filter(task => {
  //     return task.id !== id ? task : null
  //   })
  //   )
  //   // console.log(tasks)
  //   return id
  // }

  // const addTask = (taskName: string) => {
  //   setTasks([{ id: Date.now(), name: taskName, done: false }, ...tasks])
  //   // console.log(tasks)
  //   return taskName
  // }

  // useEffect(() => { console.log(tasks) })

  return (
    <div id="tasks-wrap">
      <h1 className="text-center text-white border-solid border-black border-2 p-1">TasksPage</h1>
      <div className="add-task-wrap">
        <MainForm />
      </div>
      <div className="tasks">
        {tasksStorage.map((task: ITask) => {
          return <TaskForLoop key={task.id} task={task} />;
        })}
      </div>
    </div>
  )
}

export default TasksPage
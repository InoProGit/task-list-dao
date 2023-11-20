import React, { useEffect, useState } from 'react'
import './TaskForLoop.css'
import { ITask } from '../types/task.interface'

interface Props {
  task: ITask
  removeTask: (id: number) => void
}

function TaskForLoop({ task, removeTask }: Props) {
  const [done, setDone] = useState(task.done);
  console.log(task);
  useEffect(() => { console.log('render') })

  return (
    <div className="task-wrap border-solid border-black border-2 p-1 m-2 text-white">
      <div className="task-name">{task.name}</div>
      <div className="task-mark-switch underline cursor-pointer my-2"
        onClick={() => setDone(prev => !prev)}
      >{done ? 'Done' : 'Undone'}</div>

      <button className="task-remove underline cursor-pointer my-2" onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  )
}

export default TaskForLoop
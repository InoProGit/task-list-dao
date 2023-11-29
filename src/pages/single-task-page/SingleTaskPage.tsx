import React, { useEffect } from 'react'
import './SingleTask.css'
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { tasksStore } from '../../store/tasks/tasksSlice';

function SingleTaskPage() {
  const tasks = useAppSelector((state) => state.tasks)
  const dispatch = useDispatch()
  const { id } = useParams();
  const task = tasks.filter( t => t.id === Number(id) )[0]

  useEffect(() => {
    document.title = (task?.name) ? task.name : 'Removed'
  }, [task]);

  const removeHandler = () => {
    dispatch(tasksStore.actions.removeTask(task))
    dispatch(tasksStore.actions.countUpdate(task.done))
  }

  console.log(task)
  if (task?.name) {
    return (
      <>
        <h1 className="text-center text-white border-solid border-white border-2 p-1 m-2">SingleTaskPage</h1>
        <div className="task-wrap border-solid border-black border-2 p-1 m-2 text-white">
          <div className="task-name">{task.name} {task.done? '(Is done)': '(Undone)'}</div>
          <div className="task-mark-switch underline cursor-pointer my-2"
            onClick={() => dispatch(tasksStore.actions.doneToggle(task))}
            >{tasks.find(t => t.id === task.id)?.done ? 'Mark as undone' : 'Mark as done'}</div>


          <button className="task-remove underline cursor-pointer my-2" onClick={() => removeHandler()}>Remove</button>
          <br />
          <Link to="/tasks" className="underline cursor-pointer my-2">Go to tasks page</Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1 className="text-center text-white border-solid border-white border-2 p-1 m-2">SingleTaskPage</h1>
        <div className="task-wrap border-solid border-black border-2 p-1 m-2 text-white">
          <div className="task-name">Task is removed!</div>
          <Link to="/tasks" className="underline cursor-pointer my-2">Go to tasks page</Link>
        </div>
      </>
    )
  }
}

export default SingleTaskPage
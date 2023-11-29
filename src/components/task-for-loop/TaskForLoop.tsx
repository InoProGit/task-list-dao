import './TaskForLoop.css'
import { ITask } from '../types/task.interface'
import { tasksStore } from '../../store/tasks/tasksSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks'
import { Link } from 'react-router-dom'

interface Props {
  task: ITask
}

function TaskForLoop({ task }: Props) {
  const tasksStorage = useAppSelector(state => state.tasks)
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(tasksStore.actions.removeTask(task))
    dispatch(tasksStore.actions.countUpdate(task.done))
  }


  return (
    <div className="task-wrap border-solid border-white border-2 p-2 m-2 mb-4 text-white">
      <Link to={`/tasks/${task.id}`} className="task-name open-single-task underline">{task.name} {task.done? '(Is done)': '(Undone)'}</Link>
      <div className="task-mark-switch underline cursor-pointer my-2"
        onClick={() => dispatch(tasksStore.actions.doneToggle(task))}
      >{tasksStorage.find(t => t.id === task.id)?.done ? 'Mark as undone' : 'Mark as done'}</div>

      <button className="task-remove underline cursor-pointer my-2" onClick={() => removeHandler()}>Remove</button>
    </div>
  )
}

export default TaskForLoop
import './TaskForLoop.css'
import { ITask } from '../types/task.interface'
import { tasksStore } from '../../store/tasks/tasksSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks'

interface Props {
  task: ITask
}

function TaskForLoop({ task }: Props) {
  const tasksStorage = useAppSelector(state => state.tasks)
  const dispatch = useDispatch()

  return (
    <div className="task-wrap border-solid border-black border-2 p-1 m-2 text-white">
      <div className="task-name">{task.name}</div>
      <div className="task-mark-switch underline cursor-pointer my-2"
        onClick={() => dispatch(tasksStore.actions.doneToggle(task))}
      >{tasksStorage.find(t => t.id === task.id)?.done ? 'Done' : 'Undone'}</div>

      <button className="task-remove underline cursor-pointer my-2" onClick={() => dispatch(tasksStore.actions.removeTask(task))}>Remove</button>
    </div>
  )
}

export default TaskForLoop
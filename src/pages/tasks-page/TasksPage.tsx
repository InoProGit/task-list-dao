import './TasksPage.css'
import { useAppSelector } from '../../hooks'
import TaskForLoop from '../../components/task-for-loop/TaskForLoop'
import { ITask } from '../../components/types/task.interface'
import MainForm from "../../components/form/MainForm";
import { useDispatch } from 'react-redux';
import { changeFilterStatus } from '../../store/tasks/tasksSlice';
import { useEffect, useState } from 'react';


function TasksPage() {
  const tasks = useAppSelector((state) => state.tasks)
  const filterStatus = useAppSelector((state) => state.filterStatus)
  const dispatch = useDispatch()

  const [filteredTasks, setFilteredTasks] = useState(tasks)

  useEffect(() => {
    try {
      if (filterStatus === 101) {
        setFilteredTasks(tasks)
      } else if (filterStatus === 102) {
        setFilteredTasks(tasks.filter(t => t.done === true))
      } else if (filterStatus === 103) {
        setFilteredTasks(tasks.filter(t => t.done === false))
      }
    } catch (error) {
      console.log("Somethings wrong")
      console.log(error)
    }
  }, [filterStatus, tasks])

  return (
    <div id="tasks-wrap">
      <h1 className="text-center text-white border-solid border-white border-2 p-1 m-2">TasksPage</h1>
      <div className="filter-container text-white flex p-4 items-center">
        <div className="filter-header text-lg mr-2">Filter tasks by:</div>
        <div onClick={() => dispatch(changeFilterStatus(102))} className="mr-2 underline cursor-pointer">Is Done</div>
        <div onClick={() => dispatch(changeFilterStatus(103))} className="mr-2 underline cursor-pointer">Undone</div>
        <div onClick={() => dispatch(changeFilterStatus(101))} className="mr-2 underline cursor-pointer">Reset filter</div>
      </div>
      <div className="add-task-wrap">
        <MainForm />
      </div>
      <div className="tasks-container flex">
        <div className="tasks m-auto">
          {filteredTasks.map((task: ITask) => {
            return <TaskForLoop key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default TasksPage
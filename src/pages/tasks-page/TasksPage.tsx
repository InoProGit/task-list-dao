import './TasksPage.css'
import { useAppSelector } from '../../hooks'
import TaskForLoop from '../../components/task-for-loop/TaskForLoop'
import { ITask } from '../../components/types/task.interface'
import MainForm from "../../components/form/MainForm";
import { useDispatch } from 'react-redux';
import { changeFilterStatus, tasksStore } from '../../store/tasks/tasksSlice';
import { useEffect, useState } from 'react';


function TasksPage() {
  const tasks = useAppSelector((state) => state.tasks)
  const filterStatus = useAppSelector((state) => state.filterStatus)
  const dispatch = useDispatch()
  
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  useEffect(() => {
    console.log('Click works' + filterStatus)
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
      <div onClick={() => dispatch(changeFilterStatus(102))}>Is Done</div>
      <div onClick={() => dispatch(changeFilterStatus(103))}>UnDodne</div>
      <div onClick={() => dispatch(changeFilterStatus(101))}>Reset</div>
      <h1 className="text-center text-white border-solid border-black border-2 p-1">TasksPage</h1>
      <div className="add-task-wrap">
        <MainForm />
      </div>
      <div className="tasks">
        {filteredTasks.map((task: ITask) => {
          return <TaskForLoop key={task.id} task={task} />;
        })}
      </div>
    </div>
  )
}

export default TasksPage
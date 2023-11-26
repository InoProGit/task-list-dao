import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ITask } from '../../components/types/task.interface'

import data from '../../tasks.json';


interface TasksState {
  tasks: ITask[],
  filterStatus: number
}

const initialState: TasksState = {
  tasks: [...data],
  filterStatus: 101
}

export const tasksStore = createSlice({
  name: 'tasksStorage',
  initialState,
  reducers: {
    addTask: (state, { payload: task }) => {
      console.log('addTask reducer')
      if (state.tasks.some(t => t.id === task.id))
        return

      return {
        tasks: [task, ...state.tasks],
        filterStatus: initialState.filterStatus
      }
    },
    removeTask: (state, { payload: task }) => {
      state.tasks = state.tasks.filter(t => t.id !== task.id)
    },
    doneToggle: (state, { payload: task }) => {
      let finded = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[finded] = { ...state.tasks[finded], done: !state.tasks[finded].done }
      console.log(state);
      return state
    },
    changeFilterStatus: (state, { payload: arg }) => {
      console.log('Click works'+ arg)
      return {
        ...state,
        filterStatus: arg
      }
    }
  },
})

export const { addTask, removeTask, changeFilterStatus } = tasksStore.actions

export const selectTasks = (state: RootState) => state.tasks

export default tasksStore.reducer
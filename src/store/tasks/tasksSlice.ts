import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ITask } from '../../components/types/task.interface'

import data from '../../tasks.json';


interface TasksState {
  tasks: ITask[],
  filterStatus: number,
  count: {
    done: number,
    undone: number
  }
}

const makeCountDone = (tasks: ITask[]) => {
  let done = 0
  tasks.findIndex(t => (t.done === true) ? done++: false)
  return {
      done: done,
      undone: tasks.length - done
  }
}

const initialState: TasksState = {
  tasks: [...data],
  filterStatus: 101,
  count: {
    done: makeCountDone(data).done,
    undone: makeCountDone(data).undone
  }
}


export const tasksStore = createSlice({
  name: 'tasksStorage',
  initialState,
  reducers: {
    addTask: (state, { payload: task }) => {
      if (state.tasks.some(t => t.id === task.id))
        return
        let done = state.count.done,
          undone = state.count.undone
        if (task.done === true) {
          done = state.count.done + 1
        } else {
          undone = state.count.undone + 1
        }
        return {
          ...state,
          tasks: [task, ...state.tasks],
          filterStatus: initialState.filterStatus,
          count: {
            done: done,
            undone: undone
          }
        }
    },
    removeTask: (state, { payload: task }) => {
      state.tasks = state.tasks.filter(t => t.id !== task.id)
    },
    doneToggle: (state, { payload: task }) => {
      let finded = state.tasks.findIndex(t => t.id === task.id)

      state.tasks[finded] = { ...state.tasks[finded], done: !state.tasks[finded].done }

      state.count  = (state.tasks[finded].done === true) ? {
        done: state.count.done + 1,
        undone: state.count.undone - 1
      } : {
        done: state.count.done - 1,
        undone: state.count.undone + 1
      }

      return state
    },
    changeFilterStatus: (state, { payload: arg }) => {
      return {
        ...state,
        filterStatus: arg
      }
    },
    countUpdate: (state, { payload: boolean }) => {
      state.count  = (boolean === true) ? {
        done: state.count.done - 1,
        undone: state.count.undone
      } : {
        done: state.count.done,
        undone: state.count.undone - 1
      }

      return state
    }
  },
})

export const { addTask, removeTask, changeFilterStatus } = tasksStore.actions

export const selectTasks = (state: RootState) => state.tasks

export default tasksStore.reducer
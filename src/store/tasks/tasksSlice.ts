import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ITask } from '../../components/types/task.interface'

import data from '../../tasks.json';


// Define a type for the slice state
// interface CounterState {
//   value: number
// }

// Define the initial state using that type
const initialState: ITask[] = [...data]

export const tasksStore = createSlice({
  name: 'tasksStorage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTask: (state, { payload: task }) => {
      console.log('addTask reducer')
      if (state.some(t => t.id === task.id))
        return

      state.unshift(task)
    },
    removeTask: (state, { payload: task }) => {
      console.log(123)
      return state = state.filter(t => t.id === task.id)
    }
  },
})

// export const { actions, reducer } = tasksStore

export const { addTask, removeTask } = tasksStore.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => tasksStore.getInitialState

export default tasksStore.reducer



// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default tasksStore.reducer
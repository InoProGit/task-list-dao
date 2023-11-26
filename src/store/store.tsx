import { configureStore } from '@reduxjs/toolkit'
import { tasksStore } from './tasks/tasksSlice'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true
})

export const store = configureStore({
  reducer: tasksStore.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { api } from './api/api'
import { tasksStore } from './tasks/tasksSlice'
import { createLogger } from 'redux-logger'

import { applyMiddleware, createStore } from 'redux';

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


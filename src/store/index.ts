import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import ticketReducer from './reducers/Ticket'

const rootReducer = combineReducers({
    ticketReducer
})

const store = createStore (rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export default store
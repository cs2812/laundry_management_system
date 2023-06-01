
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { authReducer } from "./auth/auth_Reducer"
import {appReducer} from "./app/app_Reducer"
import thunk from "redux-thunk"

const reducers= combineReducers({
    authReducer,
    appReducer
})

export const store = legacy_createStore(reducers,applyMiddleware(thunk))
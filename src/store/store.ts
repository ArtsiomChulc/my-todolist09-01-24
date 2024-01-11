import {useDispatch} from "react-redux";
import {legacy_createStore as createStore, combineReducers, AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {appReducer} from "../reducers/appReducer/appReducer";
import {tasksReducer} from "../reducers/tasksReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    task: tasksReducer
})


export const store = createStore(rootReducer)

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
import {useDispatch} from "react-redux";
import {legacy_createStore as createStore, combineReducers, applyMiddleware, AnyAction} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {appReducer} from "../reducers/appReducer/appReducer";

export const rootReducer = combineReducers({
    app: appReducer
})

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
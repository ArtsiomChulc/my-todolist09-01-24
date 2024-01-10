import {InitialStateType, RequestStatusType} from "../../types/appType";

const InitialState: InitialStateType = {
    error: null,
    status: "idle"
}

export const appReducer = (state: InitialStateType = InitialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, error: action.error}
        default: return {...state}
    }
}

export const setStatus = (status: RequestStatusType) => ({
    type: 'APP/SET_STATUS',
    status
} as const)
export const setError = (error: string | null) => ({
    type: 'APP/SET_ERROR',
    error
} as const)

//types
export type setStatusType = ReturnType<typeof setStatus>
export type setErrorType = ReturnType<typeof setError>

export type ActionsTypes = setStatusType | setErrorType
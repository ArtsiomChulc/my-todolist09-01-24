import {v4} from 'uuid';
import {TaskType} from "../types/taskType";

const initState: TaskType[] = []

export const tasksReducer = (state: TaskType[] = initState, action: ActionTypes): TaskType[] => {
    switch (action.type) {
        case "TASK/CHANGE_STATUS":
            return state.map(t => t.id === action.payload.id ? {...t, isDone: action.payload.isDone} : t)
        case "TASK/REMOVE_TASK":
            return state.filter(t => t.id !== action.id)
        case "TASK/ADD_TASK": {
            const newTask: TaskType = {id: v4(), taskTitle: action.taskTitle, isDone: false}
            return [...state, newTask]
        }
        case "TASK/SET_TASKS": {
            return [...state, ...action.tasks]
        }
        default:
            return state
    }
}

export const changeTaskStatus = (id: string, isDone: boolean) => ({
    type: 'TASK/CHANGE_STATUS',
    payload: {
        id,
        isDone
    }
} as const)

export const removeTask = (id: string) => ({
    type: 'TASK/REMOVE_TASK', id
} as const)

export const addTask = (taskTitle: string) => ({
    type: 'TASK/ADD_TASK', taskTitle
} as const)

export const setTasks = (tasks: TaskType[]) => ({
    type: 'TASK/SET_TASKS', tasks
} as const)

// export const filteredTasks = (filter: FilterType) => ({
//     type: 'TASK/FILTERED_TASKS', filter
// } as const)

type changeTaskStatusType = ReturnType<typeof changeTaskStatus>
type removeTaskType = ReturnType<typeof removeTask>
type addTaskType = ReturnType<typeof addTask>
type setTasksType = ReturnType<typeof setTasks>
// type filteredTasksType = ReturnType<typeof filteredTasks>

type ActionTypes = changeTaskStatusType | removeTaskType | addTaskType | setTasksType;
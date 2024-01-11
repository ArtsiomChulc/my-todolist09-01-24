import {TaskType} from "../types/taskType";
import { v4 } from 'uuid';

export const task1: TaskType[] = [
    {
        id: v4(),
        taskTitle: 'react',
        isDone: false
    },
    {
        id: v4(),
        taskTitle: 'redux',
        isDone: false
    },
    {
        id: v4(),
        taskTitle: 'redux toolkit',
        isDone: false
    }
]

// export const task2: TaskType[] = [
//     {
//         id: 1,
//         taskTitle: 'html',
//         isDone: false
//     },
//     {
//         id: 2,
//         taskTitle: 'css',
//         isDone: false
//     },
//     {
//         id: 3,
//         taskTitle: 'redux toolkit 2',
//         isDone: false
//     },
//     {
//         id: 4,
//         taskTitle: 'redux toolkit 2',
//         isDone: false
//     },
//     {
//         id: 5,
//         taskTitle: 'redux toolkit 2',
//         isDone: false
//     }
// ]
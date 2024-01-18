export type TaskType = {
    id: string
    taskTitle: string
    isDone: boolean
}

export type TasksType = {
    tasks: TaskType[],
    isLoadingTasks: boolean
}

export type UnionTaskType = TasksType


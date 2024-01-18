import React, {FC, ChangeEvent, useState} from 'react';
import {AddButton} from "../../components/addButton/AddButton";
import {changeTaskStatus, removeTask} from "../../reducers/tasksReducer";
import {FilteredStateType} from "../../store/mockData";
import {useAppDispatch} from "../../store/store";
import {TaskType} from "../../types/taskType";

import s from './todoList.module.scss';

type TodoListType = {
    titleTodo: string
    tasks: TaskType[]
}

export const TodoList: FC<TodoListType> = ({titleTodo, tasks}) => {

    const [filter, setFilter] = useState<FilteredStateType>('All')

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') {
            return true
        } else if (filter === 'Active') {
            return !task.isDone
        } else if (filter === 'Completed') {
            return task.isDone
        }
        return true
    })

    const dispatch = useAppDispatch()

    const onChangeStatus = (id: string, isDone: boolean) => {
        dispatch(changeTaskStatus(id, isDone))
    }

    const removeTaskCb = (id: string) => {
        dispatch(removeTask(id))
    }

    const getNameBtn = (e: string) => {
        setFilter(e as FilteredStateType)
    }

    const classBtnAll = `${s.groupButton} ${filter === 'All' ? s.active : ''}`
    const classBtnActive = `${s.groupButton} ${filter === 'Active' ? s.active : ''}`
    const classBtnCompleted = `${s.groupButton} ${filter === 'Completed' ? s.active : ''}`

    return (
        <section className={s.todoListContainer}>
            <p className={s.nameTodo}>{titleTodo}</p>
            <ul className={s.tasksWrap}>
                {filteredTasks.map(({taskTitle, id, isDone}) => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        onChangeStatus(id, e.target.checked)
                    }
                    const onClickHandler = () => {
                        removeTaskCb(id)
                    }
                    return (
                        <li key={id} className={s.taskInfo}>
                            <input type="checkbox" className={s.taskInput} onChange={onChangeHandler} checked={isDone}/>
                            <p className={s.taskTitle}>{taskTitle}</p>
                            <AddButton titleBtn={'x'} className={s.taskButton} onClickCB={onClickHandler}/>
                        </li>
                    )
                })}
            </ul>
            <div className={s.wrapGroupBtn}>
                <AddButton value={'All'} titleBtn={'All'} className={classBtnAll} onClickCB={getNameBtn}/>
                <AddButton value={'Active'} titleBtn={'Active'} className={classBtnActive} onClickCB={getNameBtn}/>
                <AddButton value={'Completed'} titleBtn={'Completed'} className={classBtnCompleted} onClickCB={getNameBtn}/>
            </div>
        </section>
    );
};

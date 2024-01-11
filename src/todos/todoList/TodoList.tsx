import React, {FC, ChangeEvent} from 'react';
import {AddButton} from "../../components/addButton/AddButton";
import {changeTaskStatus, removeTask} from "../../reducers/tasksReducer";
import {useAppDispatch} from "../../store/store";
import {TaskType} from "../../types/taskType";

import s from './todoList.module.scss';

type TodoListType = {
    titleTodo: string
    tasks: TaskType[]
}

export const TodoList: FC<TodoListType> = ({titleTodo, tasks}) => {

    const dispatch = useAppDispatch()

    const onChangeStatus = (id: string, isDone: boolean) => {
        dispatch(changeTaskStatus(id, isDone))
    }

    const removeTaskCb = (id: string) => {
        dispatch(removeTask(id))
    }

    return (
        <section className={s.todoListContainer}>
            <p className={s.nameTodo}>{titleTodo}</p>
            <ul className={s.tasksWrap}>
                {tasks.map(({taskTitle, id, isDone}) => {
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
                            <AddButton nameBtn={'x'} className={s.taskButton} onClick={onClickHandler}/>
                        </li>
                    )
                })}
            </ul>
            <div className={s.wrapGroupBtn}>
                <AddButton nameBtn={'All'} className={s.groupButton} onClick={() => {
                }}/>
                <AddButton nameBtn={'Active'} className={s.groupButton} onClick={() => {
                }}/>
                <AddButton nameBtn={'Completed'} className={s.groupButton} onClick={() => {
                }}/>
            </div>
        </section>
    );
};

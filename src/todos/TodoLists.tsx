import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {TaskType} from "../types/taskType";
import {TodoList} from "./todoList/TodoList";

import s from './todoLists.module.scss';

export const TodoLists = () => {
    const task = useSelector<AppRootStateType, TaskType[]>(state => state.task)

    return (
        <div className={s.todosWrap}>
            <TodoList tasks={task} titleTodo={'robobbooo'}/>
        </div>
    );
};
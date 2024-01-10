import React from 'react';
import {task1, task2} from "../store/mockData";
import {TodoList} from "./todoList/TodoList";

import s from './todoLists.module.scss';

export const TodoLists = () => {
    return (
        <div className={s.todosWrap}>
            <TodoList tasks={task1} titleTodo={'robobbooo'}/>
            <TodoList tasks={task2} titleTodo={'robobbooorobobbooo'}/>
        </div>
    );
};
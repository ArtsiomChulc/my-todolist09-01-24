import React from 'react';
import {TodoList} from "./todoList/TodoList";

import s from './todoLists.module.scss';

export const TodoLists = () => {
    return (
        <div className={s.todosWrap}>
            <TodoList titleTodo={'robobbooo'}/>
            <TodoList titleTodo={'robobbooorobobbooo'}/>
            <TodoList titleTodo={'robobbooo robobbooo'}/>
        </div>
    );
};
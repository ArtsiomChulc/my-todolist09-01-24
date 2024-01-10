import React, {useState, FC} from 'react';
import {AddButton} from "../../components/addButton/AddButton";
import {Input} from "../../components/input/Input";
import {TaskType} from "../../types/taskType";

import s from './todoList.module.scss';

type TodoListType = {
    titleTodo: string
    tasks: TaskType[]
}

export const TodoList: FC<TodoListType> = ({titleTodo, tasks}) => {

    return (
        <section className={s.todoListContainer}>
            <p className={s.nameTodo}>{titleTodo}</p>
            <ul>
                {tasks.map(({taskTitle, id, isDone}) => {
                    return (
                        <li key={id}>
                            <Input onChange={() => {}} className={s.taskInput} type={'checkbox'} checked={isDone}/>
                            <p>{taskTitle}</p>
                            <AddButton nameBtn={'✖️'} className={s.taskButton} onClick={() => {}}/>
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

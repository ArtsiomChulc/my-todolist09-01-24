import React, {useState} from 'react';
import {AddButton} from "../components/addButton/AddButton";
import {Header} from "../components/header/Header";
import {Input} from "../components/input/Input";
import {addTask} from "../reducers/tasksReducer";
import {useAppDispatch} from "../store/store";
import {TodoLists} from "../todos/TodoLists";

import s from './app.module.scss';

export const App = () => {
    const dispatch = useAppDispatch()
    let [taskTitle, setTaskTitle] = useState('')

    const setTaskTitleCb = (value: string) => {
        setTaskTitle(value)
    }

    const addTaskTitle = () => {
        dispatch(addTask(taskTitle))
        setTaskTitle('')
    }

    return (
        <div className={s.appContainer}>
            <Header logInText={'LogIn'}/>

            <div className={s.addTodosText}>
                <Input onChange={setTaskTitleCb} value={taskTitle} className={s.input}/>
                <AddButton nameBtn={'+'} className={s.button} onClick={addTaskTitle} />
            </div>
            <TodoLists/>
        </div>
    );
}


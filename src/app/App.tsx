import React, {useState, useEffect} from 'react';
import {AddButton} from "../components/addButton/AddButton";
import {Header} from "../components/header/Header";
import {Input} from "../components/input/Input";
import {setStatus} from "../reducers/appReducer/appReducer";
import {addTask, setTasks} from "../reducers/tasksReducer";
import {task1} from "../store/mockData";
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
        setTimeout(() => {
            dispatch(addTask(taskTitle))
            dispatch(setStatus('succeeded'))
        }, 2000)
        dispatch(setStatus('loading'))
        setTaskTitle('')
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setTasks(task1))
        }, 1000)
    }, []);

    return (
        <div className={s.appContainer}>
            <Header logInText={'LogIn'}/>

            <div className={s.addTodosText}>
                <Input onChange={setTaskTitleCb} value={taskTitle} className={s.input}/>
                <AddButton titleBtn={'+'} className={s.button} onClickCB={addTaskTitle}/>
            </div>
            <TodoLists/>
        </div>
    );
}


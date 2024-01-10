import React, {useState, useEffect} from 'react';
import {AddButton} from "../components/addButton/AddButton";
import {Header} from "../components/header/Header";
import {Input} from "../components/input/Input";
import {setStatus} from "../reducers/appReducer/appReducer";
import {useAppDispatch} from "../store/store";

import s from './app.module.scss';
import {TodoLists} from "./todoLists/TodoLists";

export const App = () => {
    const [valueTodos, setValueTodos] = useState('')

    return (
        <div className={s.appContainer}>
            <Header logInText={'LogIn'}/>

            <div className={s.addTodosText}>
                <Input onChange={setValueTodos} type={'text'} value={valueTodos} className={s.input}/>
                <AddButton nameBtn={'+'} className={s.button} onClick={() => {}} />
            </div>
            <TodoLists/>
        </div>
    );
}


import React, {useState} from 'react';
import {Header} from "../components/header/Header";
import {Input} from "../components/input/Input";

import s from './app.module.scss';

export const App = () => {
    const [valueTodos, setValueTodos] = useState('')
    console.log(valueTodos)
    return (
        <div className={s.appContainer}>
            <Header logInText={'LogIn'}/>
            <div className={s.wrapperInputBtn}>
                <Input setValue={setValueTodos} value={valueTodos} className={s.input}/>
            </div>
        </div>
    );
}


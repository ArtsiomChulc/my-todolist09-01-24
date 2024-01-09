import React from 'react';
import {Header} from "../components/header/Header";

import s from './app.module.scss';

export const App = () => {
    return (
        <div className={s.appContainer}>
            <Header logInText={'LogIn'}/>
        </div>
    );
}


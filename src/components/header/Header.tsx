import React, {FC} from 'react';
import {Burger} from "../burger/Burger";

import s from './header.module.scss';

type HeaderType = {
    logInText: string;
}

export const Header: FC<HeaderType> = ({logInText}) => {

    return (
        <header className={s.headerContainer}>
            <div className={s.headerWrapper}>
                <Burger/>
                <p className={s.logInfo}>{logInText}</p>
            </div>
        </header>
    );
};
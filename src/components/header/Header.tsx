import React, {FC} from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {RequestStatusType} from "../../types/appType";
import {Burger} from "../burger/Burger";

import s from './header.module.scss';

type HeaderType = {
    logInText: string;
}

export const Header: FC<HeaderType> = ({logInText}) => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    return (
        <header className={s.headerContainer}>
            <div className={s.headerWrapper}>
                <Burger/>
                <p className={s.logInfo}>{logInText}</p>
            </div>
            {status === 'loading' ?
                <div style={{width: '100%'}} className={s.progressBar}>
                    <ProgressBar animated now={100} />
                </div>
                : null}
        </header>
    );
};
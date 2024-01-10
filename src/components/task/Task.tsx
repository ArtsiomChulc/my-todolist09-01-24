import React, {FC} from 'react';
import {AddButton} from "../addButton/AddButton";
import {Input} from "../input/Input";

import s from './task.module.scss';

type TaskType = {
    changeCheckedTask: () => void
    taskTitle: string
    checkedTask: boolean
}

export const Task: FC<TaskType> = ({taskTitle, changeCheckedTask, checkedTask}) => {

    const classesTitle = `${s.title} ${checkedTask ? s.checkedTask : ''}`;

    return (
        <div className={s.wrapperTask}>
            <Input onChange={changeCheckedTask} checked={checkedTask} className={s.taskInput} type={'checkbox'}/>
            <p className={classesTitle}>{taskTitle}</p>
            <AddButton nameBtn={'x'} className={s.taskButton} onClick={() => {}} />
        </div>
    );
};
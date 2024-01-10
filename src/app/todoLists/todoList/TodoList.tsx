import React, {useState, FC} from 'react';
import {AddButton} from "../../../components/addButton/AddButton";
import {Task} from "../../../components/task/Task";

import s from './todoList.module.scss';

type TodoListType = {
    titleTodo: string
}

export const TodoList: FC<TodoListType> = ({titleTodo}) => {

    const [isChecked, setIsChecked] = useState(false);
    const onChangeChecked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <section className={s.todoListContainer}>
            <p className={s.nameTodo}>{titleTodo}</p>
            <Task changeCheckedTask={onChangeChecked} taskTitle={'dododododoвсвсвсмвсвмвмвм'} checkedTask={isChecked} />
            <div className={s.wrapGroupBtn}>
                <AddButton nameBtn={'All'} className={s.groupButton} onClick={() => {}}/>
                <AddButton nameBtn={'Active'} className={s.groupButton} onClick={() => {}}/>
                <AddButton nameBtn={'Completed'} className={s.groupButton} onClick={() => {}}/>
            </div>
        </section>
    );
};

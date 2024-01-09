import React, {useState} from 'react';
import s from "./burger.module.scss";

export const Burger = () => {
    const [isBurgerCross, setIsBurgerCross] = useState(false);

    const classesForBurger = `${s.burger} ${isBurgerCross ? s.burgerCross : ''}`;

    const onClickBurger = () => {
        setIsBurgerCross(!isBurgerCross)
    }

    return (
        <div className={classesForBurger} onClick={onClickBurger}>
            <span className={s.burgerLines}></span>
        </div>
    );
};
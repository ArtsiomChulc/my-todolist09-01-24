import React, {useState, FC} from 'react';
import s from "./burger.module.scss";

type BurgerType = {
    className?: string;
}

export const Burger: FC<BurgerType> = ({className}) => {
    const [isBurgerCross, setIsBurgerCross] = useState(false);

    const classesForBurger = `${className} ${s.burger} ${isBurgerCross ? s.burgerCross : ''}`;

    const onClickBurger = () => {
        setIsBurgerCross(!isBurgerCross)
    }

    return (
        <div className={classesForBurger} onClick={onClickBurger}>
            <span className={s.burgerLines}></span>
        </div>
    );
};
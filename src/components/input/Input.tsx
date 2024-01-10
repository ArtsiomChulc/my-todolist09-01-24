import React, {FC, ChangeEvent} from 'react';

import s from './input.module.scss';

type InputType = {
    setValue: (value: string) => void
    value: string
    className: string
}

export const Input: FC<InputType> = ({setValue, value, className}) => {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input className={className} type="text" onChange={onChangeValue} value={value}/>
        </>
    );
};

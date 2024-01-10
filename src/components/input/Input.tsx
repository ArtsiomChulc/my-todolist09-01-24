import React, {FC, ChangeEvent} from 'react';


type InputType = {
    onChange: (value: string) => void
    value?: string
    className: string
    type: string
    checked?: boolean
}

export const Input: FC<InputType> = ({onChange, value, className, type, checked}) => {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <>
            <input className={className} type={type} onChange={onChangeValue} value={value} checked={checked}/>
        </>
    );
};

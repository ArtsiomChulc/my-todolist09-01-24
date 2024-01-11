import React, {FC, ChangeEvent} from 'react';


type InputType = {
    onChange: (value: string) => void
    value: string
    className: string
}

export const Input: FC<InputType> = ({onChange, value, className}) => {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <>
            <input className={className} type={'text'} onChange={onChangeValue} value={value} />
        </>
    );
};

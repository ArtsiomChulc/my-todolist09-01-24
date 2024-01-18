import React, {FC, MouseEventHandler} from 'react';

type AddButtonType = {
    titleBtn: string
    className?: string
    onClickCB?: (event: string) => void
    value?: string
}

export const AddButton: FC<AddButtonType> = ({className, titleBtn, onClickCB, value}) => {
    const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
        const buttonValue = event.currentTarget.value
        if (onClickCB) {
            onClickCB(buttonValue)
        }
    }
    return (
        <>
            <button onClick={onClickHandler} value={value} className={className}><p>{titleBtn}</p></button>
        </>
    );
};
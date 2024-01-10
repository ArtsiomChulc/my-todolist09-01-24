import React, {FC} from 'react';

type AddButtonType = {
    nameBtn: string
    className: string
    onClick: () => void
}

export const AddButton: FC<AddButtonType> = ({className, nameBtn, onClick}) => {
    return (
        <>
            <button onClick={onClick} className={className}><p>{nameBtn}</p></button>
        </>
    );
};
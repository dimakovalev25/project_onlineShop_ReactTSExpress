import React, {FC, useState} from 'react';

const Events: FC = () => {
    const [value, setValue] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        // console.log(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    return (
        <div>
            <input onChange={changeHandler} value={value} type={'text'}/>
            <button onClick={clickHandler}>button</button>

        </div>
    );
};

export default Events;

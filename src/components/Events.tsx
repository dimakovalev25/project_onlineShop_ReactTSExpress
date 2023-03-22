import React, {ChangeEvent, DragEvent, FC, MouseEvent, useCallback, useState} from 'react';

const Events: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, []);

    const onButtonClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        console.log('click')
    }, []);

    const onDivDrag = useCallback((event: DragEvent<HTMLDivElement>) => {
        
    }, []);

    const dropHandler = useCallback((event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
    }, []);

    const leaveHandler = useCallback((event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
    }, []);

    const dragWithHandler = useCallback((event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)
    }, []);

    return (
        <div>
            <input value={value} type={'text'} onChange={onInputChange}/>
            <button onClick={onButtonClick}>btn</button>
            <div draggable style={{width: '50px', margin: '1rem', height: '50px', background: 'orange'}}
                 onDrag={onDivDrag}></div>
            <div draggable style={{width: '50px', height: '50px',
                background: isDrag ? 'orange' : 'red'}}
                 onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 onDragOver={dragWithHandler}></div>

        </div>
    );
};

export default Events;

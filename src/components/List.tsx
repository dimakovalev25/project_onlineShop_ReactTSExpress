import React, {FC, MouseEvent, useCallback, useEffect, useState} from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item :T) => React.ReactNode
}

export default function List<T> (props: ListProps<T>) {

    const [items, setItems] = useState([]);


    return (
        <div>

            {props.items.map(props.renderItem)}


        </div>
    )
}



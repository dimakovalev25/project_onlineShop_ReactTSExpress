import React, {FC} from 'react';
import {ITodo} from "../types/types";
import Input
    from "@react-buddy/ide-toolbox/dist/previews/tools-panel/props-edit-table/table-items/table-item/table-item-control/input";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <>
            <input type='checkbox' checked={todo.completed}/>{todo.title}<br/>
        </>
    );
};

export default TodoItem;

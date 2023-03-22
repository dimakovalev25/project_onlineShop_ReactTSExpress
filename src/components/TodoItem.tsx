import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <div style={{padding: '1rem'}}><input checked={todo.completed} type={"checkbox"}></input>{todo.id} : {todo.title}</div>
        </div>
    );
};

export default TodoItem;

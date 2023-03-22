import React, {useCallback, useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import Title from './components/Title';
import {UserList} from "./components/UserList";
import {ITodo, IUser} from './types/types';
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import Events from "./components/Events";

function App() {
    // const users: IUser[] = [
    //     {id:1, name: 'alex', email: 'fff', address: {city: 'gomel'}},
    //     {id:2, name: 'dima', email: 'fff', address: {city: 'gomel'}},
    // ]

    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    async function fetchUsers() {
        try {

            const response  = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)

        } catch (e) {
        console.log(e)
        }
    }
    async function fetchTodos() {
        try {

            const response  = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=4');
            setTodos(response.data)

        } catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);


    const onCardClick = useCallback(() => {
        console.log('click')
    }, []);

    return (
        <div>
            <Title type={'h3'}>React & TS</Title>
            <Events/>
            <Card variant={CardVariant.border} height='25px' width='200px' onClick={onCardClick}>ListUsers
            </Card>
            
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo}/> }/>

        </div>
    );
}

export default App;

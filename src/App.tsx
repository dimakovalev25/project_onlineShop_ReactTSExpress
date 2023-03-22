import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";

import {ITodo, IUser} from './types/types'
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import Events from "./components/Events";

function App() {
    // const users: IUser[] = [
    //     {id:1, name: 'alex', email: 'fff', address: {city: 'gomel'}},
    //     {id:1, name: 'dima', email: 'fff', address: {city: 'gomel'}},
    // ]

    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    },[])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)

        } catch (e){
            console.log(e)
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
            setTodos(response.data)

        } catch (e){
            console.log(e)
        }
    }

    return (
        <div>
            react TS!
            {/*<Card onclick={(num) => console.log('click', num)} variant={CardVariant.out} width='1px' height='200px'><h2>card1</h2></Card>*/}

            {/*<UserList users={users} />*/}
            {/*<List items={users} renderItem={(user:IUser) => <UserItem user={user} key={user.id}/>}/>*/}

            {/*<List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo}/> }/>*/}

            {/*<Events/>*/}

            <input type={'text'}/>
            <button>add</button>
            <button>add</button>
            <button>add</button>
        </div>
    );
}

export default App;

import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div style={{padding: '1rem'}}>{user.name} lives in the city {user.address.city}</div>
        </div>
    );
};

export default UserItem;

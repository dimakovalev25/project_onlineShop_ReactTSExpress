import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <>
             <div>{user.name} lives {user.address.city}</div>
        </>
    );
};

export default UserItem;

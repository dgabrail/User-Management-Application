import React from 'react';
import {User} from "../../types.d";
import UserItem from "../UserItem/UserItem";
interface  Props {
    users: User[]
}
const Users: React.FC<Props> = ({users}) => {
    return (
        <>
            {users.map((user, index) => (
                <UserItem key={index} user={user}/>
            ))}
        </>
    );
};

export default Users;
import React from 'react';
import { User } from "../../types.d";
interface Props {
    user: User
}
const UserItem: React.FC<Props> = ({ user }) => {
    let active = '';
    if (user.active === true) {
        active = 'Yes'
    } else if (user.active === false) {
        active = 'No'
    }

    return (
        <div className="card mb-2" style={{ width: '18rem', textAlign: 'center' }}>
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text ">{user.role}</p>
            <p className="card-text">{active}</p>
            <p className="card-text small">{user.email}</p>
        </div>
    );
};

export default UserItem;
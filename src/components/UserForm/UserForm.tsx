import React, {useState} from 'react';
import {User} from "../../types.d";
interface  Props {
    addUser: (newUser: User) => void
}
const UserForm: React.FC<Props> = ({addUser}) => {
    const [user , setUser] = useState<User>({
        name: '',
        role: '',
        active: false,
        email: '',
    })

    const userSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addUser({
            ...user
        })
    };

    return (
        <form onSubmit={userSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={(e) => {
                        setUser(prev => ({...prev, name: e.target.value}))
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Active">Active</label>
                <input
                    type="checkbox"
                    name="Active"
                    id="Active"
                    checked={user.active}
                    onChange={(e) => {
                        setUser(prev => ({...prev, active: e.target.checked}))
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                    type="text"
                    name="Email"
                    id="Email"
                    className="form-control"
                    value={user.email}
                    onChange={(e) => {
                        setUser(prev => ({...prev, email: e.target.value}))
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Role">Role</label>
                <select
                    name="Role"
                    id="Role"
                    className="form-control"
                    onChange={(e) => {
                        setUser(prev => ({...prev, name: e.target.value}))
                    }}
                >
                    <option value="user"/>
                    <option value="edit"/>
                    <option value="admin"/>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserForm;
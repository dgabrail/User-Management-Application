import React, { useState } from 'react';
import { User } from "../../types.d";
interface Props {
    addUser: (newUser: User) => void
}
const UserForm: React.FC<Props> = ({ addUser }) => {
    const [user, setUser] = useState<User>({
        name: '',
        role: '',
        active: false,
        email: '',
    })

    const cheked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({ ...prev, active: e.target.checked }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const userSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addUser(user);
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
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Active">Active</label>
                <input
                    type="checkbox"
                    id="Active"
                    checked={user.active}
                    onChange={(e) => cheked(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Role">Role</label>
                <select
                    name="role"
                    id="Role"
                    className="form-control"
                    onChange={(e) => onChange(e)}
                >
                    <option value="user">user</option>
                    <option value="edit">edit</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserForm;
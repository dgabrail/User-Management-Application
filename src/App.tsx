import React, {useState} from 'react';
import {User} from "./types.d";

function App() {
  const [users , setUsers] = useState<User[]>([])
  const addUser = (newUser: User) => {
    setUsers(prev => [...prev , newUser])
  }

  return (
    <>
      <main className={'container-fluid'}>
        <div className={'row mt-2'}>
          <div className={'col'}>
            <UserForm addUser={addUser}/>
          </div>
          <div className={'col'}>
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

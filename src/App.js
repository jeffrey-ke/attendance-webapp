import './App.css';
import AddUser from './Components/Users/AddUser/AddUser';
import UserList from './Components/Users/UserList/UserList';

import React, { useState } from 'react';

const TEST_USERS = [{name: "jeff", age: "10"}]

function App() {

    const [users, setUsers] = useState(TEST_USERS);

    const onUserAdded = (user) => {
        setUsers( (prevUsers) => {
            return [user, ...prevUsers]
        });
    };

    return (
        <div className="App">
            <AddUser onUserAdded={onUserAdded}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;

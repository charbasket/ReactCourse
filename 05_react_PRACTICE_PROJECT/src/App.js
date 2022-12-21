import React, { useState } from 'react';
import ErrorModal from './Components/UI/ErrorModal';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userList.length == 0 ? <></> : <UserList users={userList} />}
    </div>
  );
}

export default App;

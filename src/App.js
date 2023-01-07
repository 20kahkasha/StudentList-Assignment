import React,{useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler= (uName,uAge)=>{
    setUsersList((prevUserList)=>{
      return[...prevUserList, {name:uName, age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;

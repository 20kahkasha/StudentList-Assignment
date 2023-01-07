import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername]= useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]= useState();

  const addUserHandler= (event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0  || enteredAge.trim().length===0)
    {
      setError(
        {
          title: "Invalid input",
        message: "empty input values"
        }
        
      )
      return;
    }
    if(+enteredAge<1)
    {
      setError(
        {
          title: "Invalid age",
        message: "enter postive age"
        }
        
      )
      return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
  const errorHandler= ()=>{
    setError(null);
  }
  return (
    <React.Fragment>
     {error && <ErrorModal title={error.title} message={error.message} onErrorHandle={errorHandler}></ErrorModal>}
   <Card className={classes.input}>
      <form  onSubmit={addUserHandler}>
       
          <label htmlFor='Username'>Student Name</label>
          <input id="Username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
        
          <label htmlFor='Age'>Roll number</label>
          <input id='Age' type="number"  onChange={ageChangeHandler} value={enteredAge}></input>
        
        <Button type="submit" >Add Student</Button>
      </form>
      </Card>
      </React.Fragment>
  );
};

export default AddUser;
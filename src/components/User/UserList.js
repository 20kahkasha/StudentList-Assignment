import React from "react"
import Card from "../UI/Card"
import classes from './UserList.module.css'
const UserList=(props)=>{
    return(
        <React.Fragment>
       <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>(
                
                <li key={user.id}>
                   ({user.age} ) {user.name} 
                </li>
            ))}
        </ul>
        <div className={classes.count}>
            <p>Total Number of students: {props.users.length} </p>

        </div>
       </Card> 
       
        
    
       </React.Fragment>
    )
}
export default UserList
import React from "react";
import classes from './AddUser.modules.css'
import Card from "../../UI/Card";

const AddUser = props => {

    const addUserHandler = (event) =>{
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form className={classes.input} onSubmit={addUserHandler}>
            <label>Username</label>
            <input type='text' id="username"></input>
            <label>Date</label>
            <input type='text' id="age"></input>
            <button type="submit">Add User</button> 
            </form>
        </Card>
        
    );
}
export default AddUser;
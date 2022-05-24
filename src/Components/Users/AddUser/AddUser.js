import React from "react";
import './AddUser.css'

const AddUser = props => {
    return (
        <form className="input">
            <label className="input label">Username</label>
            <input type='text' className="input input"></input>
            <label>Date</label>
            <input type='text' className="input input"></input>
        </form>
    );
}
export default AddUser;
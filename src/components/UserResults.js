import React from 'react';

const  UserResult = props=>{
    const {firstname, lastname, email, password, confirm} = props.data;
    return(
        <div>
            <h2>Results</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirmed Password: {confirm}</p>
        </div>
    )
}
export default UserResult;
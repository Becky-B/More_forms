import React,  { useState } from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [hasBeenSubmitted, setHasBeenSubmitted]= useState(false);
    const [errorFirstname, setErrorFirstname] = useState("");
    const [errorLastname, setErrorLastname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");

    const createUser = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        setHasBeenSubmitted( true );
    };

    const formMessage = e => {
        if (hasBeenSubmitted ){
            return "thank you for submitting your form"
        }
        else{
            return "Please submit a form"
        }
    }

    const handleFirstname = e =>{
        setInputs({firstname: e.target.value});
        if(e.target.value.length == 0 ){
            setErrorFirstname("")
        } else if(e.target.value.length < 2){
            setErrorFirstname("Firstname must be at leasts 2 characters**")
        } else{
            setErrorFirstname("")
        }
    };
    

    const handleLastname = e =>{
        setInputs({lastname: e.target.value});
        if(e.target.value.length == 0 ){
            setErrorLastname("")
        } else if(e.target.value.length < 2){
            setErrorLastname("Lastname must be at leasts 2 characters**")
        } else{
            setErrorLastname("")
        }
    };

    const handleEmail = e =>{
        setInputs({email: e.target.value});
        if(e.target.value.length == 0 ){
            setErrorEmail("")
        } else if(e.target.value.length < 5){
            setErrorEmail("Email must be at leasts 5 characters**")
        } else{
            setErrorEmail("")
        }
    };

    const handlePassword = e =>{
        setInputs({password: e.target.value});
        if(e.target.value.length == 0 ){
            setErrorPassword("")
        } else if(e.target.value.length < 8){
            setErrorPassword("Password must be at leasts 8 characters**")
        } else{
            setErrorPassword("")
        }
    };

    const handleConfirm = e =>{
        setInputs({confirm: e.target.value});
        console.log()
        console.log(e.target.value)
        if(e.target.value.length == 0 ){
            setErrorConfirm("")
        } else if(e.target.value != inputs.password){
            setErrorConfirm("Passwords do Not match**")
        } else{
            setErrorConfirm("")
        }
    };


    return(
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div>
                { 
                errorFirstname?
                <p style={{color: "red"}}>{errorFirstname}</p>:
                ""
                }
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" name="firstname" onChange= { handleFirstname }  />
            </div>
            <div>
            { 
                errorLastname?
                <p style={{color: "red"}}>{errorLastname}</p>:
                ""
                }
                <label htmlFor="lastname">Lastname: </label>
                <input type="text" name ="lastname" onChange= { handleLastname } />
            </div>
            <div>
            { 
                errorEmail?
                <p style={{color: "red"}}>{errorEmail}</p>:
                ""
                }
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange= { handleEmail } />
            </div>
            <div>
            { 
                errorPassword?
                <p style={{color: "red"}}>{errorPassword}</p>:
                ""
                }
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange= { handlePassword } />
            </div>
            <div>
            { 
                errorConfirm?
                <p style={{color: "red"}}>{errorConfirm}</p>:
                ""
                }
                <label htmlFor="confirm">Comfirm Pasword: </label>
                <input type="password" name="confirm" onChange= { handleConfirm } />
            </div>
        </form>
    );
};
export default UserForm;
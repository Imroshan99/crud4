import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../service/api';
const AddUser = () => {
    const navigation=useNavigate();
    const initialval={name:"",username:"",phone:"",password:""}
    const [users,setUser]=useState(initialval);
    const {name,username,phone,password}=users;
    const  userInputHandl=(e)=>{
        setUser({...users,[e.target.name]:e.target.value});
        console.log(users,"usersss")
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        await createUser(users);
        navigation("/")
    }
  return (
    <>
        <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input value={name} onChange={userInputHandl}  name='name' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">username</label>
                    <input value={username} onChange={userInputHandl}  name='username' type="text" className="form-control" id="exampleInputPassword1" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">phone</label>
                    <input value={phone} onChange={userInputHandl}  name='phone' type="text" className="form-control" id="exampleInputPassword1" placeholder="phone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">username</label>
                    <input value={password} onChange={userInputHandl}  name='password' type="text" className="form-control" id="exampleInputPassword1" placeholder="password"/>
                </div>
                    
                <button onClick={submitHandler} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default AddUser
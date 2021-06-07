import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee } from '../actions/index';
import { Link } from 'react-router-dom';


const Regemployee = () => {
    var showList = '';
    const dispatch = useDispatch();
    const list = useSelector((state) => state.employeeReducers.list)
    const [newName, setName] = useState('');
    const [newCompany, setCompany] = useState('');
    const [newEmail, setEmail] = useState('');
    const [newPwd, setPwd] = useState('');
    const [newMessage, setMessage] = useState(false)

    if (list.length > 0) {
        setTimeout(() => {
            // After 3 seconds set the show value to false
            setMessage(false)
        }, 3000)

        showList = <><Link to="/showlist" className="btn btn-success">View List</Link></>;
    }
    return (
        <div className="container">
            <form className="was-validated bg-primary col-6 mx-auto p-5 mt-3 rounded">
                <div className="form-group">
                    <h2 className="mx-auto col-6 text-white">Registration</h2>
                </div>
                <div className="form-group">
                    <label for="uname" className="text-white">Employee Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Employee Name" name="uname" value={newName} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label for="uname" className="text-white">Company Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Company Name" name="cuname" value={newCompany} onChange={(e) => setCompany(e.target.value)} />
                </div><div className="form-group">
                    <label for="uname" className="text-white">Email:</label>
                    <input type="text" className="form-control" placeholder="Enter username" name="email" value={newEmail} onChange={(e) => setEmail(e.target.value)} />
                </div><div className="form-group">
                    <label for="uname" className="text-white">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter Password" name="pwd" value={newPwd} onChange={(e) => setPwd(e.target.value)} />
                </div>
                <span className="btn btn-success" onClick={() => dispatch(addEmployee(newName, newCompany, newEmail, newPwd), (setName(''), setCompany(''), setEmail(''), setPwd(''), setMessage('Registration Successfull!')))}>Submit</span>&nbsp;&nbsp;{showList}&nbsp;&nbsp;
                     <b id="successMessage" className="text-white">{newMessage} </b>
            </form>
        </div>
    );
}

export default Regemployee;



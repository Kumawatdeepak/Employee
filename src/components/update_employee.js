import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmployee } from '../actions/index';
import { Link, useParams } from 'react-router-dom';


const Editemployee = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const list = useSelector((state) => state.employeeReducers.list);
    const newlist = list.filter((elem) => elem.id === id);
    const [newName, setName] = useState(newlist[0].name);
    const [newCompany, setCompany] = useState(newlist[0].company);
    const [newEmail, setEmail] = useState(newlist[0].email);
    const [newId] = useState(newlist[0].id);
    const [newMessage, setMessage] = useState(false);
    setTimeout(() => {
        setMessage(false)
    }, 3000)

    return (
        <div className="container bg-primary rounded">
            <h2 className="text-center text-white p-5">update Employee</h2>
            <Link to="/" className="btn btn-success m-1">Add New</Link>&nbsp;&nbsp;&nbsp;<Link to="/showlist" className="btn btn-success">View List</Link>&nbsp;&nbsp;<b className="text-white">{newMessage} </b>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Employee Name</th>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <input className="form-control" type="text" value={newName} onChange={(e) => { setName(e.target.value) }} />
                        </td>
                        <td>
                            <input className="form-control" type="text" value={newCompany} onChange={(e) => { setCompany(e.target.value) }} />
                        </td>
                        <td>
                            <input className="form-control" type="text" value={newEmail} onChange={(e) => { setEmail(e.target.value) }} />
                            <input className="form-control" type="hidden" value={newId} />
                        </td>
                        <td><span className="btn btn-danger" onClick={() => dispatch(updateEmployee(newId, newName, newCompany, newEmail), setMessage('Data Update Successfully!'))}>Update</span></td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
export default Editemployee;



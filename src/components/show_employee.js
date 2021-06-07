import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delEmployee } from '../actions/index';
import { Link } from 'react-router-dom';

const Showemployee = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.employeeReducers.list)
    return (
        <div className="container bg-primary rounded">
            <h2 className="text-center text-white p-5">Employe List</h2>
            <Link to="/" className="btn btn-success m-1">Add New</Link>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Employee Name</th>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {list.map((e, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.company}</td>
                                <td>{e.email}</td>
                                <td><span className="btn btn-danger" onClick={() => dispatch(delEmployee(e.id))}>Delete</span>&nbsp;&nbsp;
                                   <Link to={`/editemployee/${e.id}`} className="btn btn-success">Edit</Link></td>
                            </tr>
                        )
                    })}
                </thead>
            </table>
        </div>
    );
}
export default Showemployee;



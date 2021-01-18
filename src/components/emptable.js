import React from 'react';
import { Table } from 'react-bootstrap';

function EmpTable(props) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => (
                        <tr key={employee.id.value}>
                            <td><img alt={employee.name.first} src={employee.picture.thumbnail} /></td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default EmpTable;


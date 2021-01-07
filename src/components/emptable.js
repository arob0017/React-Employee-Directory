import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class EmpTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
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
                        {this.props.employees.map(employee => (
                            <tr>
                                <img alt={employee.name.first} src={employee.picture.thumbnail} />
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
}

export default EmpTable;


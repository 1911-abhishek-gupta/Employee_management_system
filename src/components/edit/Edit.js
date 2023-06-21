import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "./edit.css"


function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);
    const [position, setPosition] = useState('');

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date || !position) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
            position
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className='editContainer'>
            <form className="formConatiner" onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <div className="formDetail">
                <label htmlFor="firstName">First Name: </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                </div>
                <div className="formDetail">
                <label htmlFor="lastName">Last Name : </label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                </div>
                <div className="formDetail">

                <label htmlFor="email">Email  : </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className="formDetail">

                <label htmlFor="salary">Salary ($) : </label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                </div>
                <div className="formDetail">
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    type="text"
                    name="position"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                />
                </div>
                <div className="formDetail">

                <label htmlFor="date">Date : </label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update"  className="button" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}



export default Edit
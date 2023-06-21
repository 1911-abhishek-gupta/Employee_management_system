import React, { useState } from 'react'
import Header from '../../components/Header'
import { employeesData } from '../../data/data'
import Add from '../../components/add/Add'
import Edit from '../../components/edit/Edit'
import EmployeeCard from '../../components/employeeCard/EmployeeCard'
import Swal from 'sweetalert2';
import "./home.css"

const Home = () => {

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter(employee => employee.id !== id));
      }
    });
  }


  return (
    <div className='container'>
      {/* List */}
      {!isAdding && !isEditing && (
        <>
        <div className="homeContainer">

        <div className="header1"><Header
            setIsAdding={setIsAdding}
          /></div>
          
          {employees.length > 0 ? (
            employees.map((e) => (
              <EmployeeCard
                key={e.id}
                employee={e}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))

          )
           :<div className='noElement'>
                No Employee.Click on "Add Employee" button to create a new Employee"
           </div>   
        }
        </div>
        </>
      )}
      {/* Add */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  )

}

export default Home
import React from 'react'
import {Eraser} from "phosphor-react"
import "./employeCard.css"


const EmployeeCard = ({ employee, handleEdit, handleDelete }) => {
  return (
    <div className='cardContainer'>
      <div className="cardName">
        {employee.firstName}
      </div>
      <hr className="cardHr" />
      <div className="cardDetails">
        <div className="carddetail">
          <span className="detailLabel">First Name : </span>
          <span className="detailValue">{employee.firstName}</span>
        </div>
        <div className="carddetail">
          <span className="detailLabel">Last Name : </span>
          <span className="detailValue">{employee.lastName}</span>
        </div>
        <div className="carddetail">
          <span className="detailLabel">Email : </span>
          <span className="detailValue">{employee.email}</span>
        </div>
        <div className="carddetail">
          <span className="detailLabel">Salary : </span>
          <span className="detailValue">{employee.salary}</span>
        </div>
        <div className="carddetail">
          <span className="detailLabel">Position : </span>
          <span className="detailValue">{employee.position}</span>
        </div>
        <div className="carddetail">
          <span className="detailLabel">Date : </span>
          <span className="detailValue">{employee.date}</span>
        </div>
      </div>
      <hr className="cardHr1" />
      <div className="cardFunction">
        <button className="edit" onClick={() => handleEdit(employee.id)} >Edit</button>
        <button className='delete' onClick={()=>handleDelete(employee.id)}> <Eraser size={32} /></button>
      </div>
    </div>
  )
}

export default EmployeeCard
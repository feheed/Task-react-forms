import React from "react";

function Student({ removeStudent, student }) {
  const studentOf = student;
  return (
    <div className="student">
      <p>{studentOf.name}</p>
      <p>{studentOf.lastName}</p>
      <ul>
        <li>phone number :{studentOf.phoneNumber}</li>
        <li>power: {studentOf.power}</li>
      </ul>
      <p className="delete" onChange={removeStudent(studentOf)}>
        delete
      </p>
    </div>
  );
}

export default Student;

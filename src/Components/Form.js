import React from "react";
import SideInfo from "./SideInfo";
import { useState } from "react";

function Form({ addStudent }) {
  const [student, setStudents] = useState();
  const handleChange = (e) => {
    setStudents({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
  };
  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <input
          neme="name"
          placeholder="First Name ..."
          onChange={handleChange}
        />
        <input
          neme="lastName"
          placeholder="Last Name ..."
          onChange={handleChange}
        />
        <input
          neme="phoneNumber"
          placeholder="Phone Number ..."
          onChange={handleChange}
        />
        <input
          neme="power"
          placeholder="Power with 3 words ..."
          onChange={handleChange}
        />
        <input
          neme="emailAddress"
          placeholder="Email ..."
          onChange={handleChange}
        />
        <button type="submit">Click on Me Boss</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;

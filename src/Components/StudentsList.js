import React from "react";
import Student from "./Student";

function StudentsList({ list, removeStudent }) {
  const listOfStudent = list.map((student) => (
    <Student student={student} removeStudent={removeStudent} />
  ));
  return <div>{listOfStudent}</div>;
}

export default StudentsList;

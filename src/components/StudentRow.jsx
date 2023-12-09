import React from 'react';

const StudentRow = ({ student, selectedSubject, selectedWeek, updateStudentInfo, updateGrade }) => (
  <tr key={student.id}>
    <td>
      <input
        type="text"
        value={student.name}
        onChange={(e) => updateStudentInfo(student.id, 'name', e.target.value)}
      />
    </td>
    <td>
      <input
        type="text"
        value={student.surname}
        onChange={(e) => updateStudentInfo(student.id, 'surname', e.target.value)}
      />
    </td>
    {selectedSubject && selectedWeek && student.grades[selectedSubject] && student.grades[selectedSubject][selectedWeek] && student.grades[selectedSubject][selectedWeek].map((grade, index) => (
      <td key={index}>
        <input
          type="number"
          value={grade !== null ? grade : ''}
          onChange={(e) => updateGrade(student.id, selectedSubject, selectedWeek, index, e.target.value)}
        />
      </td>
    ))}
  </tr>
);

export default StudentRow;

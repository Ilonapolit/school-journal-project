import React, { useState } from 'react';
import './App.css';
import SubjectButton from './SubjectButton';
import WeekButton from './WeekButton';
import StudentRow from './StudentRow';

const App = () => {
  // ... (remaining imports and constants)

  // ... (useState and other functions)

  return (
    <div className="App">
      {/* Subject Buttons */}
      <div className="subject-buttons">
        {subjects.map((subject) => (
          <SubjectButton
            key={subject}
            subject={subject}
            selectedSubject={selectedSubject}
            onSelectSubject={onSelectSubject}
          />
        ))}
      </div>

      {/* Week Buttons */}
      <div className="week-buttons">
        {weeks.map((week) => (
          <WeekButton
            key={week}
            week={week}
            selectedWeek={selectedWeek}
            onSelectWeek={onSelectWeek}
          />
        ))}
      </div>

      {/* Student Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              selectedSubject={selectedSubject}
              selectedWeek={selectedWeek}
              updateStudentInfo={updateStudentInfo}
              updateGrade={updateGrade}
            />
          ))}
        </tbody>
      </table>

      {/* Add Student Button */}
      <button onClick={addRow}>Добавить студента</button>
    </div>
  );
};

export default App;

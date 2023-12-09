import React, { useState } from 'react';
import SubjectButton from './components/SubjectButton';
import WeekButton from './components/WeekButton';
import StudentRow from './components/StudentRow';
import './App.css'

const App = () => {
  const subjects = ['math', 'english', 'georgian'];
  const weeks = ['Week1', 'Week2', 'Week3'];
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]);
  const [students, setStudents] = useState([
    { 
      id: 1, 
      name: 'John', 
      surname: 'Doe', 
      grades: {
        math: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        },
        english: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        },
        georgian: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        }
      } 
    },
  ]);

  const onSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setSelectedWeek(weeks[0]);
  };

  const onSelectWeek = (week) => {
    setSelectedWeek(week);
  };

  const addRow = () => {
    const newStudent = {
      id: students.length + 1,
      name: '',
      surname: '',
      grades: {
        math: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        },
        english: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        },
        georgian: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        }
      },
    };

    setStudents([...students, newStudent]);
  };

  const updateStudentInfo = (id, field, value) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
    );

    setStudents(updatedStudents);
  };

  const updateGrade = (id, subject, week, dayIndex, value) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? {
            ...student,
            grades: {
              ...student.grades,
              [subject]: {
                ...student.grades[subject],
                [week]: student.grades[subject][week].map((grade, index) => (index === dayIndex ? value : grade)),
              },
            },
          }
        : student
    );

    setStudents(updatedStudents);
  };

  return (
    <div className="App">
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

      <button onClick={addRow}>Add Student </button>
    </div>
  );
};

export default App;

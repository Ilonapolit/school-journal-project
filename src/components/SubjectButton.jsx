import React from 'react';

const SubjectButton = ({ subject, selectedSubject, onSelectSubject }) => (
  <button
    className={`subject-button ${selectedSubject === subject ? 'selected' : ''}`}
    onClick={() => onSelectSubject(subject)}
  >
    {subject}
  </button>
);

export default SubjectButton;
